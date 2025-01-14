'use client'

import { useEffect } from 'react'
import { ThemeProvider, useTheme } from 'next-themes'
import { CustomUserContextProvider } from '@/utils/useUser'
import { PostHogProvider } from '@/utils/usePostHog'

function ThemeWatcher() {
  let { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    let media = window.matchMedia('(prefers-color-scheme: dark)')

    function onMediaChange() {
      let systemTheme = media.matches ? 'dark' : 'light'
      if (resolvedTheme === systemTheme) {
        setTheme('system')
      }
    }

    onMediaChange()
    media.addEventListener('change', onMediaChange)

    return () => {
      media.removeEventListener('change', onMediaChange)
    }
  }, [resolvedTheme, setTheme])

  return null
}

export function Providers({ children }) {
  return (
    // Make the dark theme the default theme.
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
      forcedTheme="dark"
    >
      <ThemeWatcher />
      <CustomUserContextProvider>
        <PostHogProvider>{children}</PostHogProvider>
      </CustomUserContextProvider>
    </ThemeProvider>
  )
}
