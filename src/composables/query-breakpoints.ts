export const breakpointsEnum = {
  xs: 575,
  sm: 767,
  md: 991,
  lg: 1199,
  xl: 1600,
}

export const useQueryBreakpoints = () => {
  const breakpoints = reactive(useBreakpoints(breakpointsEnum))
  // mobile
  const isMobile = breakpoints.smaller('sm')
  // pad
  const isPad = breakpoints.between('sm', 'md')
  // desktop
  const isDesktop = breakpoints.greater('md')

  return { breakpoints, isMobile, isPad, isDesktop }
}
