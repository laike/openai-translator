import '../enable-dev-hmr'
import { createRoot } from 'react-dom/client'
import './index.css'
import DesktopPage from '@/app/chat'
import { Route, MemoryRouter as Router, Routes } from 'react-router-dom'
import ChatMobilePage from '@/app/chat/mobile'

const root = createRoot(document.getElementById('root') as HTMLElement)

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<DesktopPage />} />
                    <Route path='/chat' element={<DesktopPage />} />
                    <Route path='/chat/mobile' element={<ChatMobilePage />} />
                </Routes>
            </Router>
        </>
    )
}

root.render(<App />)
