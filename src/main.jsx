import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomePage from "./components/HomePage/HomePage";
import ChatPage from "./components/comonents/ChatPage";
import Login from "./components/login/login";



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<div className='container'> <Login/></div>
    ,
  },
  {
    path: "/HomePage",
    element:<div className='container'> <HomePage/></div>
    ,
  },
  {
    path: "/ChatPage",
    element: <div className='container'> <ChatPage/></div>
    ,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
