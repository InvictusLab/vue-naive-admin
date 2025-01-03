export interface LayoutTheme {
  title?: string
  layout?: 'mix' | 'side' | 'top'
  headerHeight: number
}

export const layoutThemeConfig: LayoutTheme = {
  title: 'Invictus Vue Admin',
  layout: 'mix',
  headerHeight: 48,
}
