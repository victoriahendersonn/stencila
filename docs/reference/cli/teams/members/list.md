<!-- Generated from doc comments in Rust. Do not edit. -->

# `list`: List members of a team

## Usage

```sh
stencila teams members list [options] <team>
```

Use this command to retrieve a list of a teams members. Each item in this list has a membership id which you can use to remove a team member.

Defaults to using your default organization. Use the `--org` option to list members in a team belonging to another organization.

## Arguments

| Name   | Description |
| ------ | ----------- |
| `team` |             |

## Options

| Name             | Description                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| `--org -o <org>` | The id of the org. If this option is not supplied, Stencila will use your default organization. |

## Global options

| Name                        | Description                                                                                                                                          |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--help`                    | Print help information.                                                                                                                              |
| `--version`                 | Print version information.                                                                                                                           |
| `--as <format>`             | Format to display output values (if possible).                                                                                                       |
| `--json`                    | Display output values as JSON (alias for `--as json`).                                                                                               |
| `--yaml`                    | Display output values as YAML (alias for `--as yaml`).                                                                                               |
| `--md`                      | Display output values as Markdown if possible (alias for `--as md`).                                                                                 |
| `--interact -i`             | Enter interactive mode (with any command and options as the prefix).                                                                                 |
| `--debug`                   | Print debug level log events and additional diagnostics. Equivalent to setting `--log-level=debug` and `--log-format=detail` and overrides the both. |
| `--log-level <log-level>`   | The minimum log level to print. One of: `trace`, `debug`, `info`, `warn`, `error`, `never`                                                           |
| `--log-format <log-format>` | The format to print log events. One of: `simple`, `detail`, `json`                                                                                   |