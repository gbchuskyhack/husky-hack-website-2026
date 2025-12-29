// name capitalization: "joHN" -> "John", "  aLIce  " -> "Alice", "" -> ""
const applyTitleCase = (names: string[]): string[] =>
  names
    .map((name) => name === undefined ? '' : name.trim())
    .map(([firstLetter, ...otherLetters]) =>
      (firstLetter === undefined && otherLetters.length === 0)
        ? ''
        : `${firstLetter.toLocaleUpperCase()}${
          otherLetters.join('').toLowerCase()
        }`
    )

const isNameValid = (name: string): boolean => /^[a-zA-Z\s'-]+$/.test(name)

const isEmailValid = (email: string): boolean =>
  /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(email)

export { applyTitleCase, isEmailValid, isNameValid }
