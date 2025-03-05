import {
  type LayoutTheme,
  layoutThemeConfig,
  type LayoutType,
} from '@/config/layout-theme'
import { darkTheme } from '@/config/app-theme'
import { colors, darkColors, type ThemeType } from '@/config/theme'

const useAppStore = defineStore('app', () => {
  const defaultLayout = import.meta.env.DEV
    ? layoutThemeConfig
    : useLayoutTheme()
  const layout = reactive(unref(defaultLayout))
  const visible = ref(false)

  const toggleVisible = (value: boolean) => {
    visible.value = value
  }

  const toggleCollapsed = (value: boolean) => {
    layout.collapsed = value
  }

  const updateLayout = (value: LayoutType['key']) => {
    layout.layout = value
  }

  const updateLayoutStyle = (value: LayoutTheme['layoutStyle']) => {
    layout.layoutStyle = value
  }

  const layoutList = computed<LayoutType[]>(() => {
    return [
      {
        id: 'side',
        key: 'side',
        title: '侧边布局',
      },
      {
        id: 'top',
        key: 'top',
        title: '顶部布局',
      },
      {
        id: 'mix',
        key: 'mix',
        title: '混合布局',
      },
    ]
  })

  watch(
    () => layout.layoutStyle,
    value => {
      if (value === 'dark') {
        toggleDark(true)
      } else {
        toggleDark(false)
      }
    },
  )

  const layoutStyleList = computed<LayoutType[]>(() => {
    const list: LayoutType[] = [
      {
        id: 'light',
        key: 'side',
        title: '亮色布局',
      },
    ]
    if (layout.layout !== 'mix') {
      list.push({
        id: 'inverted',
        key: 'side',
        inverted: true,
        title: '反转色风格',
      })
    } else {
      if (layout.layoutStyle !== 'dark') {
        updateLayoutStyle('light')
      }
    }
    list.push({
      id: 'dark',
      key: 'side',
      title: '暗色风格',
      dark: true,
    })
    return list
  })

  const layoutTheme = computed(() => {
    if (layout.layoutStyle === 'dark') {
      return darkTheme
    }
    return undefined
  })

  const overridesTheme = computed(() => {
    if (isDark.value) return darkColors[layout.theme]
    else return colors[layout.theme]
  })

  const updateTheme = (value: string) => {
    layout.theme = value
  }

  const themeList = computed<ThemeType[]>(() => {
    const list = []
    const myColors = isDark.value ? darkColors : colors
    for (const key in myColors) {
      const value = myColors[key]
      list.push({
        color: value?.common?.primaryColor as string,
        key,
      })
    }
    return list
  })

  return {
    layout,
    layoutList,
    layoutStyleList,
    layoutTheme,
    overridesTheme,
    updateTheme,
    themeList,
    visible,
    toggleVisible,
    toggleCollapsed,
    updateLayout,
    updateLayoutStyle,
  }
})

export { useAppStore }
