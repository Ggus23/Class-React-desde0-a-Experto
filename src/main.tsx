import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { initAxios } from './services/axios.service.ts'
import AppHookConteiner from './AppHookConteiner.tsx'

initAxios();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppHookConteiner />
  </StrictMode>,
)
