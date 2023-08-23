import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import { loader as rootLoader } from "./routes/root.jsx";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ErrorPage from './routes/errorPage.jsx'
import Contact from './components/Contact.jsx'
import Root, { loader as rootLoader } from "./routes/root";
const router= createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement:<ErrorPage/>,
    loader: rootLoader,
    children : [
      {
        path:'contacts/:contactId',
        element:<Contact/>
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
)
