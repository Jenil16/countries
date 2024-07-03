import styles from '../styles/Searchbar.module.css'
import searchiconB from '../assets/images/Search_black.svg'
import searchiconW from '../assets/images/Search_white.svg'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/Themecontext'

const SearchBar = ({setQuery}) => { 
  const [isDark, setIsDark] = useContext(ThemeContext) 
  return (
    <div className={`${styles.parentsearchdiv} ${isDark ? styles.active: ''}`}>
      <div className={styles.searchdiv}>
          <img className={styles.searchicon} src={`${isDark ? searchiconW : searchiconB }`} alt="search icon" />
          <input className={`${styles.searchbar} ${isDark ? styles.active: ''}`} type="text" placeholder='Search country here...' onChange={(e) => setQuery(e.target.value.toLowerCase())} /> 
      </div>
    </div>
  )
}

export default SearchBar
