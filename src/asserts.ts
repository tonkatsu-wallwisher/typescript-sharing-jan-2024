
function ensureValueTruthy<T>(value: T): asserts value is NonNullable<T> {
  if (!value) {
    process.exit(0)
  }
}

declare function readUserInput(): string | undefined

declare function invariant(condition: any, message: string): asserts condition

function main() {
  const input = readUserInput()
  invariant(input !== undefined, 'Input must be defined')
  console.log('Input:', input.trim())
}

main()