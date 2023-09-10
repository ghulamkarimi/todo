
import ReactDOM from 'react-dom/client'

import './index.css'
import { AppContextProvider } from './AppContext.tsx'
import { RouterProvider } from 'react-router-dom'
import { Router } from './Router.tsx'
 


ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppContextProvider>

    <RouterProvider router={Router} />

  </AppContextProvider>
)
