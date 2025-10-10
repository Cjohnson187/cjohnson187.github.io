import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Get root element
const container = document.getElementById('root');

// typeguard
if (!container) {
  throw new Error('Failed to find the root element');
}

// create the root and render the app
createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
