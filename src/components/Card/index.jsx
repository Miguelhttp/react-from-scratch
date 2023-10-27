import styles from './Card.module.css'
import { FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'

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
        <a
          href={htmlUrl}
          target="_blank"
          rel="noreferrer noopener"
          className={styles.card_button}
        >
          <BsArrowRight />
        </a>
      </div>
    </section>
  )
}

export default Card
