/**
 * Obfuscate the API key by replacing the middle part with asterisks
 * @param {string} secret - The API key to obfuscate
 * @param {number} start - The number of characters to keep at the start of the key
 * @param {number} end - The number of characters to keep at the end of the key
 * @param {number} asterisks - The number of asterisks to replace the middle part with
 */
export function obfuscateSecret(
  secret: string,
  start: number = 7,
  end: number = 3,
  asterisks: number = 4
) {
  return (
    secret.substring(0, start) +
    '*'.repeat(asterisks) +
    secret.substring(secret.length - end)
  )
}
