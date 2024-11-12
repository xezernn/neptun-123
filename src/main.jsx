import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DataContext from './context/DataContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import BasketContext from './context/BasketContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DataContext>
      <BasketContext>
        <App />
      </BasketContext>
    </DataContext>
  </BrowserRouter>
)
