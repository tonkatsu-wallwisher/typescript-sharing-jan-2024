type Filter = 
  | { userId: number; libraryId?: undefined }
  | { libraryId: number; userId?: undefined }

type Wall = unknown

declare function findWalls(filter: Filter): Wall[]

// @ts-expect-error
const walls = findWalls({ userId: 1, libraryId: 1 })
