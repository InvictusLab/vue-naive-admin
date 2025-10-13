import { layoutThemeConfig } from '@/config/layoutTheme.ts'

export const useAppStore = defineStore('app', () => {
  const defaultTheme = import.meta.env.DEV ? layoutThemeConfig : useLayoutTheme()

  const layout = reactive(unref(defaultTheme))

  return {
    layout,
  }
})
