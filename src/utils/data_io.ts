const formatDateForHeaders = function (date, locale = 'en') {
  const today = new Date()
  const itemDate = new Date(date)
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  let formattedDate = new Intl.DateTimeFormat(locale, options).format(itemDate)
  itemDate.toDateString() ===
    new Date(today.setDate(today.getDate() - 1)).toDateString()

  return formattedDate
}

export { formatDateForHeaders }
