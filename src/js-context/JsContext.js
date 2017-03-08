import {parse} from 'acorn'
import {simple, base} from 'acorn/dist/walk'

import {pack, unpack} from '../packing'

/**
 * A Javascript context
 *
 * Implements the Stencila `Context` API. All methods return a Promise.
 */
export default class JsContext {

  /**
   * Run JavaScript code within the global context scope (execute a code "chunk")
   *
   * In languages like R and Python it it straight forward to assign global variables
   *
   * @param {string} code Javascript code
   * @param {object} options - Any execution options
   * @return {object} - A Promise resolving to object with any `errors` (an object with line numbers as keys) and `outputs` (
   *                         a data package)
   *
   * @example
   *
   * // You can also assign global variables which are available in subsequent calls,
   * context.call('foo = "bar"\n\n') // { errors: {}, output: null }
   * context.call('foo') // { errors: {}, output: { type: 'str', format: 'text', value: 'bar' } }
   */
  run (code, options) {
    code = code || ''
    options = options || {}
    if (options.pack !== false) options.pack = true

    let error = null

    // Create a function and execute it
    try {
      (new Function(code))() // eslint-disable-line no-new-func
    } catch (e) {
      // Catch any error
      error = e
    }

    let value
    if (!error) {
      // Evaluate the last line, and if any error then undefined result
      // This is inefficient in the sense that the last line is evaluated twice
      // but it anything else would appear to require some code parsing
      let lines = code.split('\n')
      let last = lines[lines.length - 1]
      try {
        value = (new Function('return ' + last))() // eslint-disable-line no-new-func
      } catch (error) {
        value = undefined
      }
    }

    return Promise.resolve(
      this._result(error, 0, value, options.pack)
    )
  }

  /**
   * Execute JavaScript code within a local function scope (execute a code "cell")
   *
   * @param {string} code - Javascript code
   * @param {object} inputs - An object with a data pack for each input variable
   * @param {object} options - Any execution options
   * @return {object} - A Promise resolving to an object with any `errors` (an object with line numbers as keys) and `outputs` (
   *                         a data package)
   *
   * @example
   *
   * // Return statement must be used to return a value
   * context.call('return 6*7') // { errors: {}, output: { type: 'int', format: 'text', value: '42' } }
   * context.call('let x = 6\nreturn x*7') // { errors: {}, output: { type: 'int', format: 'text', value: '42' } }
   *
   * // You can specify input variables (that are local to that call),
   * context.call('return Math.PI*radius', {radius:{type:'flt', format:'text', value: '21.4'}}) // { errors: {}, output: { type: 'flt', format: 'text', value: '67.23008278682157' } }
   * context.call('return radius') // { errors: { '1': 'ReferenceError: radius is not defined' }, output: null }
   */
  call (code, inputs, options) {
    code = code || ''
    inputs = inputs || {}
    options = options || {}
    if (options.pack !== false) options.pack = true

    let error = null

    // Add inputs to `locals` i.e. the execution's local scope
    let locals = {}
    for (let name in inputs) {
      locals[name] = unpack(inputs[name])
    }

    // Generate a function body. The [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
    // prevents errors during `buble.transform` associated with any return statements (which must be within a func)
    let body = '(function(){\n' + code + '\n})()'

    // Create a function to be executed with locals
    let value
    try {
      value = (new Function('locals', 'with(locals){ return ' + body + '}'))(locals) // eslint-disable-line no-new-func
    } catch (e) {
      // Catch any error
      error = e
    }

    return Promise.resolve(
      this._result(error, 2, value, options.pack)
    )
  }

  /**
   * Determine the dependencies for a piece of Javascript code
   *
   * Returns an array of all variable names not declared within
   * the piece of code. This might include global functions.
   *
   * @param  {string} code - JavaScript code
   * @return {array<string>} - A Promise resolving to a list of dependencies
   */
  depends (code) {
    let names = {}
    let ast = parse(code)
    simple(ast, {
      Identifier: node => {
        let name = node.name
        names[name] = Object.assign(names[name] || {}, {used: true})
      },
      VariableDeclarator: node => {
        let name = node.id.name
        names[name] = Object.assign(names[name] || {}, {declared: true})
      }
    }, base)
    let depends = []
    for (let name in names) {
      let usage = names[name]
      if (usage.used && !usage.declared) depends.push(name)
    }
    return Promise.resolve(depends)
  }

  /**
   * Return a result promise
   *
   * @param {object} error - Error object, if any
   * @param {int} offset - Line number offset
   * @param {object} value - The value to be packed
   * @param {boolean} packed - Should the output be packed (or left unpacked for calls withing Javascript)
   * @return {null|object} - A set of errors by line number
   */
  _result (error, offset, value, packed) {
    if (packed !== false) packed = true

    let errors = null
    if (error) {
      // Parse the error stack to get message and line number
      let lines = error.stack.split('\n')
      let message = lines[0]
      let match = lines[1].match(/<anonymous>:(\d+):\d+/)
      let line = 0
      if (match) line = parseInt(match[1]) - 1 - offset
      errors = {}
      errors[line] = message
    }

    let output
    if (value === undefined) output = null
    else if (packed) output = pack(value)
    else output = value

    return {
      errors: errors,
      output: output
    }
  }

}
