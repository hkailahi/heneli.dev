import LogoDark from '@/data/logo_dark.svg'
import LogoLight from '@/data/logo_light.svg'
import { useTheme } from 'next-themes'

// TODO Consider inlining CSS onto a single logo.svg that changes with background-color - https://stackoverflow.com/questions/67187091/creating-svg-that-appears-black-in-light-mode-and-light-in-dark-mode
/* For different images on theme changes, per https://www.npmjs.com/package/next-themes#Images */
const Logo = () => {
  const { resolvedTheme } = useTheme()

  switch (resolvedTheme) {
    case 'light':
      return <LogoLight />
    case 'dark':
      return <LogoDark />
    default:
      return <LogoLight />
  }
}

export default Logo
