import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

function scrollToTop() {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }
  window.scrollTo(0, 0)
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

scrollToTop()
window.addEventListener('load', scrollToTop, { once: true })
requestAnimationFrame(scrollToTop)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
