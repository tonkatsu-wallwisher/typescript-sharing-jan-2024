// `{}` doesn't mean empty object, it means "any object"!
type FalseEmpty = {}

const iAmNotEmpty: FalseEmpty = false

// To have a truly empty object, use `Record<string, never>`
type TrueEmpty = Record<string, never>

const iMustBeEmpty: TrueEmpty = {}

