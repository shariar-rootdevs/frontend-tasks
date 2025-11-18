export function getPageNumbers(currentPage: number, maxPage: number): (number | string)[] {
  const delta = 2 // current page এর আগে পরে কত পেজ দেখানো হবে
  const range: number[] = []
  const rangeWithDots: (number | string)[] = []
  let previousPage: number | null = null

  for (let i = 1; i <= maxPage; i++) {
    if (i === 1 || i === maxPage || (i >= currentPage - delta && i <= currentPage + delta)) {
      range.push(i)
    }
  }

  for (const page of range) {
    if (previousPage !== null) {
      if (page - previousPage === 2) {
        rangeWithDots.push(previousPage + 1)
      } else if (page - previousPage > 2) {
        rangeWithDots.push('...')
      }
    }
    rangeWithDots.push(page)
    previousPage = page
  }

  return rangeWithDots
}
