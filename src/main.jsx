
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './translate/i18n.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './Redux-toolkit/store.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(

<Provider store={store}>

 <BrowserRouter>
   <React.StrictMode>
      <App />
   </React.StrictMode>,
 </BrowserRouter>
</Provider>
  

)
