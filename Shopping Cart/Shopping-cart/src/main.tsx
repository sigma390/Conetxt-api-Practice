import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ContextProvider } from './Store/CartContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ContextProvider>
    <React.StrictMode>
    
    <App />
  </React.StrictMode>

  </ContextProvider>
  ,
)
