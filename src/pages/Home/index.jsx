import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <React.Fragment>
      <section className={styles.home}>
        <div className={styles.apresentacao}>
          <p>
            Hello 👋, I am <br />
            <span>Miguel Braga</span> <br />
            Dev Front End
          </p>

          <Link to="/about" className={`${styles.btn} ${styles.btn_purple}`}>
            Read More
          </Link>
        </div>

        <figure>
          <img
            className={styles.img_home}
            src="/developer-front.svg"
            alt="Imagem de Home"
          />
        </figure>
      </section>
    </React.Fragment>
  )
}

export default Home
