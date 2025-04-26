import App from './App'
import './App.css'
import { AppRouter } from './AppRouter'
import { ModalProvider } from './components/Modal/Context'
import { GlobalPrivider } from './context/global.provider'
import ErrourBoundery from './ErrourBoundery'
function AppHookConteiner() {

return(
    <ErrourBoundery>
        <GlobalPrivider>
            <ModalProvider>
                <App>
                    <AppRouter />
                </App>
            </ModalProvider>
        </GlobalPrivider>
    </ErrourBoundery>
  )
}

export default AppHookConteiner
