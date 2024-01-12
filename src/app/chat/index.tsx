import RootLayout from '../layout'
import DesktopPage from './desktop'
import Migration from './features/Migration'

const Page = () => {
    const Page = DesktopPage

    return (
        <RootLayout>
            <Migration>
                <Page />
            </Migration>
        </RootLayout>
    )
}

export default Page
