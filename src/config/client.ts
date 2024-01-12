/**
 * the client config is only used in Vercel deployment
 */

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_ANALYTICS_VERCEL?: string
            NEXT_PUBLIC_VERCEL_DEBUG?: string

            NEXT_PUBLIC_ANALYTICS_MIXPANEL?: string
            NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN?: string
            NEXT_PUBLIC_MIXPANEL_DEBUG?: string

            NEXT_PUBLIC_ANALYTICS_PLAUSIBLE?: string
            NEXT_PUBLIC_PLAUSIBLE_DOMAIN?: string
            NEXT_PUBLIC_PLAUSIBLE_SCRIPT_BASE_URL?: string

            NEXT_PUBLIC_ANALYTICS_POSTHOG: string
            NEXT_PUBLIC_POSTHOG_KEY: string
            NEXT_PUBLIC_POSTHOG_HOST: string
            NEXT_PUBLIC_POSTHOG_DEBUG: string

            NEXT_PUBLIC_I18N_DEBUG: string
            NEXT_PUBLIC_I18N_DEBUG_BROWSER: string
            NEXT_PUBLIC_I18N_DEBUG_SERVER: string

            NEXT_PUBLIC_DEVELOPER_DEBUG: string
        }
    }
}

export const getClientConfig = () => ({
    // Vercel Analytics
    ANALYTICS_VERCEL: import.meta.env.NEXT_PUBLIC_ANALYTICS_VERCEL === '1',
    VERCEL_DEBUG: import.meta.env.NEXT_PUBLIC_VERCEL_DEBUG === '1',

    // Plausible Analytics
    ANALYTICS_PLAUSIBLE: import.meta.env.NEXT_PUBLIC_ANALYTICS_PLAUSIBLE === '1',
    PLAUSIBLE_DOMAIN: import.meta.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
    PLAUSIBLE_SCRIPT_BASE_URL: import.meta.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_BASE_URL || 'https://plausible.io',

    // Posthog Analytics
    ANALYTICS_POSTHOG: import.meta.env.NEXT_PUBLIC_ANALYTICS_POSTHOG === '1',
    POSTHOG_KEY: import.meta.env.NEXT_PUBLIC_POSTHOG_KEY,
    POSTHOG_HOST: import.meta.env.NEXT_PUBLIC_POSTHOG_HOST,
    POSTHOG_DEBUG: import.meta.env.NEXT_PUBLIC_POSTHOG_DEBUG === '1',

    // i18n debug mode
    I18N_DEBUG: import.meta.env.NEXT_PUBLIC_I18N_DEBUG === '1',
    I18N_DEBUG_BROWSER: import.meta.env.NEXT_PUBLIC_I18N_DEBUG_BROWSER === '1',
    I18N_DEBUG_SERVER: import.meta.env.NEXT_PUBLIC_I18N_DEBUG_SERVER === '1',

    // developer debug mode
    DEBUG_MODE: import.meta.env.NEXT_PUBLIC_DEVELOPER_DEBUG === '1',
})
