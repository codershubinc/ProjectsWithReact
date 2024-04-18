import React, { children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/Aboutus/About'
import Layout from './Layout'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'
// import Github, { GithubLoader } from './Components/Github/Github.jsx'

//Old method
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [{
//       path: "",
//       element: <Home />
//     },
//     {
//       path: 'about',
//       element: <About />
//     },
//     {
//       path:"contact",
//       element:<Contact/>
//     }
//     ]
//   }

// ]);
//latest Method
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="github/:iid" element={<Github/>} />
      <Route path="user/:id" element={<User/>} />
    </Route>)
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
