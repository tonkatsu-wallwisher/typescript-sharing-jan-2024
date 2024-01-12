import { describe, expect, it } from "bun:test";

function producePossiblyNullValue(): string | null {
  return null
}

// function expectValueNotNull(value: string | null): void {
//   expect(value).not.toBeNull()
// }
function expectValueNotNull<T>(value: T): asserts value is NonNullable<T> {
  expect(value).not.toBeNull()
}

describe('asserts', () => {
  it('should assert value', () => {
    let value: string | null = producePossiblyNullValue()
    expectValueNotNull(value)

    // No type complains!
    expect(value.trim()).toBe('hello')
  })
})