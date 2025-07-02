import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/Routs'
import { AuthProvider } from './context/AuthContext'
function App() {
  const [count, setCount] = useState(0)

  return (
   <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App
