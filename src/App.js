import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import { ThemeContext } from './contexts/Themecontext'
import { useState } from 'react'

const App = () => {

  const [isDark, setIsDark] = useState(false)
  
  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      <Navbar />
      <Outlet /> 
    </ThemeContext.Provider>
  )
}

export default App

