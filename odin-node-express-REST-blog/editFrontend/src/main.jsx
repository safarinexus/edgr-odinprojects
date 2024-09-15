import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import routes from "./routes";
import './index.css'

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
