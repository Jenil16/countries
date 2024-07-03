import { useContext } from 'react'
import styles from '../styles/Navbar.module.css'
import { ThemeContext } from '../contexts/Themecontext'
const Navbar = () => {
  const [isDark, setIsDark] = useContext(ThemeContext)
  return (
    <div className={`${styles.navbar} ${isDark ? styles.active: ''}`}>
      <h2>Where in the WORLD !</h2>
      <p onClick={()=>{
        {setIsDark(!isDark)}
      }}>Dark mode</p>
    </div>
  )
}

export default Navbar
