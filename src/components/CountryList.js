import React, { useContext, useEffect, useState } from 'react'
// import countriesData from '../countries'
import Card from './Card'
import styles from '../styles/countrylist.module.css'
import Shimmer from './Shimmer'
import { ThemeContext } from '../contexts/Themecontext'

export default function CountryList({query}) {

  const [isDark, setIsDark] = useContext(ThemeContext)
  const [countriesData, setCountriesData] = useState([])
  // const [count, setCount] = useState(0)

  //useEffect hook : It runs for the very first time on site loading and then again runs when the dependentList variables(here count i.e. [count]) mentioned gets changed.
  //If only need that to run for the single time on site loading then put the dependentList empty (i.e. []) 

  // useEffect(()=>{
  //   console.log('useEffect renderrrrsss')
  //   fetch('https://restcountries.com/v3.1/all')
  //  .then(res => res.json())
  //  .then(data => {
  //   setCountriesData(data)})
  // },[count])

  //Above here API endpoint is called for everytime the count gets increased on clicking the button

  useEffect(()=>{
    // console.log('useEffect renderrrrsss')
    fetch('https://restcountries.com/v3.1/all')
   .then(res => res.json())
   .then(data => {
    setCountriesData(data)})
  },[])


  // console.log(countriesData)
  return countriesData.length === 0 ? <Shimmer /> : (
    <>
    {/* <h1>{count}</h1> */}
    {/* {<button onClick={()=>{setCount(count+1)}}>Increase Count</button>} */}
    
    <div className={`${styles.container} ${isDark ? styles.active: ''}`}>
      {countriesData.filter((country) => country.name.common.toLowerCase().includes(query)).map((country) => {
        return (
          <Card
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
            data = {country}
          />
        )
      })}
    </div>
    </>
  )


  // return <Shimmer />
}