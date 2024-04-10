import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import { Provider } from 'react-redux'
import store from '../store.js'
import Signup from './components/Signup.jsx'
import Profile from './components/Profile.jsx'
import Category from './components/Category.jsx'
import Confirmation from './components/Confirmation.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/category',
        element: <Category />
      },

      {
        path: '/confirmation',
        element: <Confirmation />
      },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
