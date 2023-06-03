import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Components/Home/Main.jsx';
import Home from './Components/Home/Home.jsx';
import Menu from './Components/Menu/Menu.jsx';
import Ourshop from './Components/Shop/OurShop.jsx'
import LogIn from './Components/Authentication/LogIn.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Registration from './Components/Authentication/Registration.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/ourmenu",
        element: <Menu></Menu>
      },
      {
        path: "/ourshop",
        element: <Ourshop></Ourshop>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/register",
        element: <Registration></Registration>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
