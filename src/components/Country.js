import React, { useContext, useEffect, useState } from 'react'
import styles from '../styles/country.module.css'
import Shimmer from './Shimmer_country';
import { useLocation, useParams } from 'react-router-dom';
import ErrorImg from '../assets/images/error.png'
import Border from './Border'
import LeftBArrow from '../assets/images/LeftArrow_black.svg'
import LeftWArrow from '../assets/images/LeftArrow_white.svg'
import { ThemeContext } from '../contexts/Themecontext';

const Country = () => {
    // const params = new URL(document.location).searchParams;
    // const countryname = params.get('name');
    // console.log(countryname)



    const params = useParams()
    // console.log(params)
    const countryname = params.country


    // const location = useLocation()
    // console.log(location)
    const {state} = useLocation()
    console.log(state.name.common)


    const [isDark, setIsDark] = useContext(ThemeContext)
    const [countryData, setCountryData] = useState(null)
    const [notFound, setNotFound] = useState(false)

    let alphacodes = []

function updateCountrydata(state){
  try { 
    setCountryData({
      name: state.name.common,
      nativename: Object.values(state.name.nativeName)[0].common,
      flag: state.flags.svg,
      population: state.population,
      region: state.region,
      subregion: state.subregion,
      capital: state.capital[0],
      topleveldomain: state.tld[0],
      currencies: Object.values(state.currencies)[0].name,
      languages: Object.values(state.languages) + '',
      bordercountries: state.borders ? state.borders.join(',') : ''
      // bordercountries: data[0].borders ? data[0].borders.map((c)=>{
      //   // console.log(c)
      //   alphacodes.push(c)
      //   // console.log(alphacodes)
      // }) : ''
  })
  } catch (error) {
    setNotFound(true)
  }
}
    
    useEffect(()=>{
      if(state){
        updateCountrydata(state)
        return
      }
        fetch(`https://restcountries.com/v3.1/name/${countryname}?fullText=true`)
        .then(res => res.json())
        .then(data => {
            console.log(data) 
            updateCountrydata(data)         
        })
        .catch(err => {
          // console.log(err)
          setNotFound(true)
        })
    },[])
  
  if(notFound){
    return (
    <img src={ErrorImg} style={{height:691, width:1520}}></img>)
  }
  return countryData === null ? <Shimmer/> : (
    <div className={`${styles.countrydiv} ${isDark ? styles.active: ''}`}>
    <div className={styles.parentbackdiv}>
      <div className={`${styles.backdiv} ${isDark ? styles.active: ''}`} onClick={() => window.history.back()}>
        <img src={`${isDark ? LeftWArrow: LeftBArrow}`} className={styles.backimg}></img>
        <button className={`${styles.backbtn} ${isDark ? styles.active: ''}`}>Back</button>
      </div>
    </div>
      <p id={styles.countryname}><b>Country : </b><i><u>{countryData.name}</u></i></p>
      <div className={styles.content}>

      <img src={countryData.flag} alt="flag" id={styles.flagimg} />
      <div className={styles.countrycontent}>
        <div className={styles.leftdiv}>
            <p><b>Nativename : </b>{countryData.nativename}</p>
            <p><b>Population : </b>{countryData.population}</p>
            <p><b>Region : </b>{countryData.region}</p>
            <p><b>Subregion : </b>{countryData.subregion}</p>
            <p><b>Capital : </b>{countryData.capital}</p>
        </div>
        <div className="rightdiv">
            <p><b>Top level domain : </b>{countryData.topleveldomain}</p>
            <p><b>Currencies : </b>{countryData.currencies}</p>
            <p><b>Languages : </b>{countryData.languages}</p>
            {countryData.bordercountries === '' ? <p></p> :  <p><b>Border Countries : </b>{countryData.bordercountries}</p>}
            {/* {alphacodes.length == 0 ? <p></p> : <Border listofbordercountries = {alphacodes}/>} */}


        </div>
      </div>
      </div>
      
    </div>
  )
  // return <Shimmer />
}

export default Country
