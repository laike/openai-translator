import { getClientConfig } from '@/config/client'
import Vercel from './Vercel'
import Plausible from './Plausible'
import Posthog from './Posthog'

const { ANALYTICS_VERCEL, ANALYTICS_POSTHOG, ANALYTICS_PLAUSIBLE } = getClientConfig()

const Analytics = () => {
    return (
        <>
            {ANALYTICS_VERCEL && <Vercel />}
            {ANALYTICS_PLAUSIBLE && <Plausible />}
            {ANALYTICS_POSTHOG && <Posthog />}
        </>
    )
}

export default Analytics
