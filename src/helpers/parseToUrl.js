

export function parseToUrl(string) {
  return string.replace(/\s/g, '-').toLowerCase()
}