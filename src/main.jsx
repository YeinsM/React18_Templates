import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { Navbar } from './layout/navbar/Navbar.jsx'
import { Footer } from './layout/footer/Footer.jsx'
import App from './app/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>,
)
