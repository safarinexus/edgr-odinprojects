import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx';
import App from './App.jsx'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <App />
  </>
)
