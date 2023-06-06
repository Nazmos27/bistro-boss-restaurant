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

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import MyCart from './Components/PrivateLayout/Pages/MyCart.jsx';
import SideNav from './Components/PrivateLayout/SideNav.jsx';

// Create a client
const queryClient = new QueryClient()

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
  {
    path: "dashboard",
    element:<SideNav></SideNav>,
    children:[
      {
        path:"mycart",
        element:<MyCart></MyCart>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
