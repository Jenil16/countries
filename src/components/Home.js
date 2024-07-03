import React, { useContext } from 'react'
import { useState } from 'react'
import CountryList from './CountryList'
import SearchBar from './SearchBar'
import Shimmer from './Shimmer'
import { ThemeContext } from '../contexts/Themecontext'
import styles from '../styles/home.module.css'

const Home = () => {
  const [query, setQuery] = useState('')
  const [isDark, setIsDark] = useContext(ThemeContext)
  return (
    <>
      <div className={`${styles.homediv} ${isDark ? styles.active: ''}`}>
        {/* <Navbar /> */}
        <SearchBar setQuery={setQuery}/>
        <CountryList query={query}/>
      </div>
    </>
  )
}

export default Home
