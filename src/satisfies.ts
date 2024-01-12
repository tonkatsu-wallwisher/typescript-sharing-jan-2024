
// Without satisfies
type ButtonScale = 'sm' | 'md' | 'lg' | 'xl'
type ButtonScaleStyles = {
  fontSize: number
  paddingHorizontal: number
  paddingVertical: number
}

const ButtonScalePresets: { [scale in ButtonScale]: ButtonScaleStyles } = {
  sm: {
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  md: {
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  lg: {
    fontSize: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  xl: {
    fontSize: 24,
    paddingHorizontal: 10,
    paddingVertical: 10,
  }
} 

// With satisfies
const AutoButtonScalePresets = {
  sm: {
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  md: {
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  lg: {
    fontSize: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  xl: {
    fontSize: 24,
    paddingHorizontal: 20,
    paddingVertical: 10,
  }
} satisfies { [scale in string]: ButtonScaleStyles }

type AutoButtonScale = keyof typeof AutoButtonScalePresets