import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />   
    <Main />
  </React.StrictMode>,
)
