import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Errorpage from './views/error/errorpage';
import Home from './views/home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: {
      element: <Errorpage />
    }
  },
  {
    path: "/login",
    element: <App />,
    errorElement: {
      element: <Errorpage />
    }
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: {
      element: <Errorpage />
    }
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
