import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from '../Layout.jsx' 
import { Route } from 'react-router-dom'
import Home from './Home/Home'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element = {<App/>} />
      <Route path="/home" element={<Home/>} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
