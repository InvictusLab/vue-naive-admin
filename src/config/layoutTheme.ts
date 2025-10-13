export interface LayoutTheme {
  title?: string
  layout?: 'side' | 'top' | 'mix'
  headerHeight: number
}

export const layoutThemeConfig = {
  title: 'Invictus Admin',
  layout: 'mix',
  headerHeight: 48,
}
