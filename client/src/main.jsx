import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
// import ProductDetail from './pages/ProductDetail.jsx'

import router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}/>
    {/* <Router>
      <Routes>

      <Route exact path='/' element={<App/>}></Route>
      <Route exact path='/detail' element={<ProductDetail/>}></Route>
      </Routes>
    </Router> */}
  </React.StrictMode>,
)
