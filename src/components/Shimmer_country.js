import styles from '../styles/shimmer_country.module.css'

const Shimmer = () => {
  return (
    <div>
      <div id={styles.countryname}></div>
      <div className={styles.content}>

      <div id={styles.flagimg} />
      <div className={styles.countrycontent}>
        <div className={styles.leftdiv}>
            <div className={styles.info}></div>
            <div className={styles.info}></div>
            <div className={styles.info}></div>
            <div className={styles.info}></div>
            <div className={styles.info}></div>
        </div>
        <div className={styles.rightdiv}>
            <div className={styles.info}></div>
            <div className={styles.info}></div>
            <div className={styles.info}></div>
            <div className={styles.info}></div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Shimmer
