import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router/dom";
import { router } from './Components/Routes/RoutesLinks.jsx';
import AuthProvider from './Components/Contexts/AuthProvider.jsx';
import DataProvidor from './Components/Contexts/DataProvidor.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <DataProvidor>
        <RouterProvider router={router}></RouterProvider>
      </DataProvidor>
    </AuthProvider>
  </StrictMode>,
)
