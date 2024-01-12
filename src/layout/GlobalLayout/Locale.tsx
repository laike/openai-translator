import { ConfigProvider } from 'antd'
import { PropsWithChildren, memo, useState } from 'react'
import useSWR from 'swr'

import { createI18nNext } from '@/locales/create'
import { useOnFinishHydrationGlobal } from '@/store/global'
import { switchLang } from '@/utils/switchLang'

interface LocaleLayoutProps extends PropsWithChildren {
    lang?: string
}

const InnerLocale = memo<LocaleLayoutProps>(({ children, lang }) => {
    const { data: locale } = useSWR(
        lang,
        async () => await import(`antd/locale/${lang?.includes('-') ? lang?.replace('-', '_') : 'en_US'}.js`),
        { revalidateOnFocus: false }
    )
    console.debug('locale', lang)
    const [i18n] = useState(createI18nNext(lang))

    // if on browser side, init i18n instance only once
    if (!i18n.instance.isInitialized)
        i18n.init().then(() => {
            console.debug('inited.')
        })

    useOnFinishHydrationGlobal((s) => {
        if (s.settings.language === 'auto') {
            switchLang('auto')
        }
    }, [])

    return <ConfigProvider locale={locale}>{children}</ConfigProvider>
})

// const Locale = memo<LocaleLayoutProps>((props) => (
//   <Suspense fallback={<Loading />}>
//     <InnerLocale {...props} />
//   </Suspense>
// ));

export default InnerLocale
