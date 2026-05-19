import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Users from './componants/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // children:[
    //   {
    //     path:'/users',
    //     element:<Users></Users>
    //   }
    // ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
