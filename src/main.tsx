import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ModalProvider } from './components/Modal/Context/Modal.context.tsx'
import ErrourBoundery from './ErrourBoundery.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrourBoundery>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ErrourBoundery>
  </StrictMode>,
)
