import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import ErrorImg from './assets/images/error.png'
import Home from './components/Home'
import Country from './components/Country'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
          {
            path: "/",
            element: <Home />,
            errorElement: <img src={ErrorImg} style={{height:691, width:1520}}></img>,
          },
          {
            path: "/:country", //Dynamic routing : creating diff pages for diff country dynamically..... by just adding : infront of the URL
            element: <Country />,
            errorElement: <img src={ErrorImg} style={{height:691, width:1520}}></img>,
          },
      ],
      errorElement: <img src={ErrorImg} style={{height:691, width:1520}}></img>,
    },
    
  ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    {/* <App /> */}
    {/* <Navbar /> */}
    <RouterProvider router={router} />
    </>
);

