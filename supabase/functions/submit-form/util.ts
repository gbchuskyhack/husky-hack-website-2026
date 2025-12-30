// "     dos      santos     " -> "dos santos"
const normalizeSpaces = (name: string) => name.trim().replace(/\s+/g, ' ')

const applyTitleCase = (name: string): string =>
  name === undefined ? '' : normalizeSpaces(name)
    .split(/(['\s-])/) // split by spaces, hyphens, and apostrophes
    .map((part: string) => {
      if (['-', "'", ' ', ''].includes(part)) {
        return part
      }
      const firstLetter = part[0]
      const otherLetters = part.slice(1)
      if (firstLetter === undefined && otherLetters.length === 0) {
        return ''
      }
      return `${firstLetter.toUpperCase()}${otherLetters.toLowerCase()}`
    })
    .join('')

const isNameValid = (name: string): boolean => /^[a-zA-Z\s'-]+$/.test(name)

const isEmailValid = (email: string): boolean =>
  /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(email)

export { applyTitleCase, isEmailValid, isNameValid }
