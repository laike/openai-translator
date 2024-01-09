import '../enable-dev-hmr'
import { createRoot } from 'react-dom/client'
import '../../common/i18n.js'
import './index.css'
import { useTheme } from '../../common/hooks/useTheme'
import DesktopPage from '@/app/chat'

const root = createRoot(document.getElementById('root') as HTMLElement)

function App() {
    const { theme } = useTheme()

    return (
        <div
            style={{
                position: 'relative',
                height: '100%',
                background: theme.colors.backgroundPrimary,
            }}
            data-testid='popup-container'
        >
            <DesktopPage />
        </div>
    )
}

root.render(<App />)
