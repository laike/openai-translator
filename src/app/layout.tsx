import { PropsWithChildren } from 'react'

import Analytics from '@/components/Analytics'
import { DEFAULT_LANG, LOBE_LOCALE_COOKIE } from '@/const/locale'
import { LOBE_THEME_APPEARANCE, LOBE_THEME_NEUTRAL_COLOR, LOBE_THEME_PRIMARY_COLOR } from '@/const/theme'
import Layout from '@/layout/GlobalLayout'

import StyleRegistry from './StyleRegistry'
import { useCookie } from 'react-use'

const RootLayout = ({ children }: PropsWithChildren) => {
    // get default theme config to use with ssr
    const appearance = useCookie(LOBE_THEME_APPEARANCE) as any
    const neutralColor = useCookie(LOBE_THEME_NEUTRAL_COLOR)
    const primaryColor = useCookie(LOBE_THEME_PRIMARY_COLOR)
    const lang = useCookie(LOBE_LOCALE_COOKIE) as any

    return (
        <>
            <StyleRegistry>
                <Layout
                    // defaultAppearance={appearance?.values}
                    defaultLang={'en'}
                    // defaultNeutralColor={neutralColor?.values as any}
                    // defaultPrimaryColor={primaryColor?.values as any}
                >
                    {children}
                </Layout>
            </StyleRegistry>
            <Analytics />
        </>
    )
}

export default RootLayout
