import { useDispatch } from 'react-redux'
import Header from './conponents/Header/Header'
import Footer from './conponents/Foooter/Footer'
import authService from './appwrite/auth'
import { useState, useEffect } from 'react'
import { login, logout } from './store/authSlice'
import { Outlet } from 'react-router-dom'
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))

  }, [])

  return !loading ? (
    <div className='min-h-screen min-w-full flex flex-wrap content-between bg-slate-900 '>

      <div className="w-full block">
        <Header />
        <main>
          TODO : <Outlet/>
        </main>
        <Footer />
      </div>


    </div>
  ) : null
}

export default App
