import { layoutThemeConfig } from '@/config/layoutTheme.ts'

export const useLayoutTheme = createGlobalState(() => useStorage('layoutTheme', layoutThemeConfig))
