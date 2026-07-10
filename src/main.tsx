import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LightboxProvider } from './context/LightboxContext.tsx'
import { ProjectModalProvider } from './context/ProjectModalContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LightboxProvider>
      <ProjectModalProvider>
        <App />
      </ProjectModalProvider>
    </LightboxProvider>
  </StrictMode>,
)
