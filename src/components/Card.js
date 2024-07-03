import { Link } from 'react-router-dom'
import styles from '../styles/Card.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/Themecontext'

const Card = (props) => {
    // console.log(props.flagimg)
    const [isDark, setIsDark] = useContext(ThemeContext)
  return (
    <Link className={styles.countrycardanchor} to={`/${props.name}`} state={props.data}>
      <div className={`${styles.card} ${isDark ? styles.active: ''}`}>
        <img src={props.flag} alt="loading image" id={styles.flagimg}/>
        <h3 id='countryname'>{props.name}</h3>
        <p>Population: {props.population}</p>
        <p>Region: {props.region}</p>
        <p>Capital: {props.capital}</p>
      </div>
    </Link>
  )
}

export default Card
