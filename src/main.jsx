import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import FirebaseData from './FirebaseData'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseData />
    {/* <App /> */}
  </StrictMode>,
)
