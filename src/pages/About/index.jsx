import React from 'react'
import styles from './About.module.css'
import avatar from './image/avatar-02.png'
import html from './image/icon-html.svg'
import css from './image/icon-css.svg'
import js from './image/icon-js.svg'
import react from './image/icon-react.svg'

const About = () => {
  return (
    <React.Fragment>
      <section className={styles.about}>
        <div className={styles.bio}>
          <img className={styles.avatar} src={avatar} alt="Avatar" />
          <div className={styles.text_about}>
            <h2>Sobre</h2>

            <p>
              Sou <span>Miguel Braga</span> <br />
              <strong>Front End Developer</strong>
            </p>

            <p>Estudante de Programação</p>

            <p></p>
          </div>
        </div>

        <div className={styles.techs}>
          <h3>Techs</h3>
          <div className={styles.icons_techs}>
            <img src={html} alt="Ícone do HTMl" />
            <img src={css} alt="Ícone do CSS" />
            <img src={js} alt="Ícone do JavaScript" />
            <img src={react} alt="Ícone do React" />
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default About
