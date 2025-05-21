import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Footer from './pag/footer.jsx'
import Header from './pag/header.jsx'
import Main from './pag/main.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Main />
    <Footer />
  </StrictMode>,
)
