import '../styles/App.css'
import { SessionContextProvider } from '../Context/store'

export default function MyApp({ Component, pageProps }) {
    return (
        <SessionContextProvider>
            <Component {...pageProps} />
        </SessionContextProvider>
    )
}
