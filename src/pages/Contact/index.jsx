import React from 'react'
import styles from './Contact.module.css'
import { GoMail } from 'react-icons/go'
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'
const Contact = () => {
  return (
    <React.Fragment>
      <section className={styles.contact}>
        <h2>Contato</h2>
        <h3>Entre em Contato</h3>
        <span>Para mais informação.</span>

        <div className={styles.icons}>
          <a
            href="mailto:miguelalves1497@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GoMail className={styles.icon} />
          </a>
          <a
            href="https://www.instagram.com/miguelbalves_/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsInstagram className={styles.icon} />
          </a>
          <a
            href="https://github.com/Miguelhttp"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsGithub className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/miguel-braga-48a339234/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsLinkedin className={styles.icon} />
          </a>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Contact
