import { first, ready } from '../../util'
import * as downloads from './downloads'
import DateTimeFormat = Intl.DateTimeFormat

const dateFormatter = new DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
})

const formatDate = (dateEl: Element | null): void => {
  if (dateEl instanceof Element) {
    const date = new Date(dateEl.innerHTML)
    dateEl.innerHTML = dateFormatter.format(date)
  }
}

ready((): void => {
  formatDate(first(':--datePublished'))

  downloads.build(
    'TheArticleId',
    first(':--title')?.getAttribute('content') ?? ''
  )
})
