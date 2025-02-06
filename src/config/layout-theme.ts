import logo from '@/assets/images/navLogo.svg'

export interface LayoutTheme {
  title?: string
  layout: 'mix' | 'side' | 'top'
  headerHeight: number
  logo?: string
}

export const layoutThemeConfig: LayoutTheme = {
  title: 'Invictus Vue Admin',
  layout: 'mix',
  headerHeight: 48,
  logo,
}
