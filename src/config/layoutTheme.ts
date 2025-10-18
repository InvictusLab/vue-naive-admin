import logo from '@/assets/images/logo.png'

export interface LayoutTheme {
  layout?: 'side' | 'top' | 'mix'
  headerHeight: number
  logo?: string
  title?: string
  siderWidth: number
  siderCollapsedWidth: number
  showSiderTrigger: boolean | 'bar' | 'arrow-circle'
}

export const layoutThemeConfig: LayoutTheme = {
  title: 'Invictus Admin',
  layout: 'mix',
  headerHeight: 48,
  logo: logo,
  siderWidth: 240,
  siderCollapsedWidth: 48,
  showSiderTrigger: 'bar',
}
