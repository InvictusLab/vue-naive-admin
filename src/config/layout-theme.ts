import logo from '@/assets/images/navLogo.svg'

export interface LayoutTheme {
  title?: string
  layout: 'mix' | 'side' | 'top'
  headerHeight: number
  logo?: string
  siderWidth: number
  siderCollapsedWidth: number
  showSiderTrigger: boolean | 'bar' | 'arrow-circle'
}

export const layoutThemeConfig: LayoutTheme = {
  title: 'Invictus Admin',
  layout: 'side',
  headerHeight: 48,
  logo,
  siderWidth: 240,
  siderCollapsedWidth: 48,
  showSiderTrigger: 'bar',
}
