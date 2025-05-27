import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/*
import './index.css'
import Footer from './pag/footer.jsx'
import Header from './pag/header.jsx'
import Main from './pag/main.jsx'
*/

import Formulario from './pag/estados/formulario.jsx'

/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Main />
    <Footer />
  </StrictMode>,
)
*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Formulario />
  </StrictMode>,
)