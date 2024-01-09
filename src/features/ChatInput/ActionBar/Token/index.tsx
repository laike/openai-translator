import { memo } from 'react'

import { useSessionStore } from '@/store/session'
import { agentSelectors } from '@/store/session/selectors'
import LargeTokenContent from './TokenTag'

const Token = memo(() => {
    const [showTokenTag] = useSessionStore((s) => [agentSelectors.showTokenTag(s)])

    return showTokenTag && <LargeTokenContent />
})

export default Token
