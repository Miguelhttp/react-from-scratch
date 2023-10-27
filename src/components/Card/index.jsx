import styles from './Card.module.css'
import { FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Card = ({ name, description, htmlUrl }) => {
  return (
    <section className={styles.card}>
      <h3>{name}</h3>
      <p>{description}</p>

      <div className={styles.card_footer}>
        <div className={styles.card_icons}>
          <FaHtml5 />
          <FaCss3Alt />
        </div>
        <Link to={htmlUrl} className={styles.card_button}>
          <BsArrowRight />
        </Link>
      </div>
    </section>
  )
}

export default Card
