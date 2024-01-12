import { Icon, MobileTabBar, type MobileTabBarProps } from '@toboto/lobehub-ui'
import { createStyles } from 'antd-style'
import { Bot, MessageSquare, User } from 'lucide-react'
import { rgba } from 'polished'
import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import {useNavigate} from 'react-router-dom'

import { useGlobalStore } from '@/store/global'
import { SidebarTabKey } from '@/store/global/initialState'

const useStyles = createStyles(({ css, token }) => ({
    active: css`
        svg {
            fill: ${rgba(token.colorPrimary, 0.25)};
        }
    `,
}))

export default memo<{ className?: string }>(({ className }) => {
    const [tab, setTab] = useGlobalStore((s) => [s.sidebarKey, s.switchSideBar])
    const { t } = useTranslation('common')
    const { styles } = useStyles()
    const router = useNavigate()
    const items: MobileTabBarProps['items'] = useMemo(
        () => [
            {
                icon: (active) => <Icon className={active ? styles.active : undefined} icon={MessageSquare} />,
                key: SidebarTabKey.Chat,
                onClick: () => {
                    setTab(SidebarTabKey.Chat)
                    router('/chat')
                },
                title: t('tab.chat'),
            },
            {
                icon: (active) => <Icon className={active ? styles.active : undefined} icon={Bot} />,
                key: SidebarTabKey.Market,
                onClick: () => {
                    setTab(SidebarTabKey.Market)
                    router('/market')
                },
                title: t('tab.market'),
            },
            {
                icon: (active) => <Icon className={active ? styles.active : undefined} icon={User} />,
                key: SidebarTabKey.Setting,
                onClick: () => {
                    setTab(SidebarTabKey.Setting)
                    router('/settings')
                },
                title: t('tab.setting'),
            },
        ],
        [t]
    )
    return <MobileTabBar activeKey={tab} className={className} items={items} onChange={(key) => setTab(key as any)} />
})
