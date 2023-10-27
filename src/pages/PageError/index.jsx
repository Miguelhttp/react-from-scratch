import React from 'react'
import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import styles from './PageError.module.css'

const PageError = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <h2 className={styles.subtitle}>Página não encontrada</h2>
        <div className={styles.texts}>
          <span className={styles.text_big}>Erro 404</span> <br />
          <strong className={styles.text_purple}>Página não encontrada</strong>
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  )
}

export default PageError
