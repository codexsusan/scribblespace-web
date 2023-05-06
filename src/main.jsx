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
import Blog from './views/blog/Blog';
import BlogPost from './views/blog-post/BlogPost';
import Category from './views/category/Category';
import Author from './views/author/Author';
import Login from './views/auth/Login';


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
    element: <Login />,
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
  {
    path: "/blog",
    element: <Blog />,
    errorElement: {
      element: <Errorpage />
    }
  },
  {
    path: "/blogpost/:id",
    element: <BlogPost />,
    errorElement: {
      element: <Errorpage />
    }
  },
  {
    path: "/category",
    element: <Category />,
    errorElement: {
      element: <Errorpage />
    }
  },
  {
    path: "/author/:id",
    element: <Author />,
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
