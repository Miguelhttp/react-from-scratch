import React from 'react'
import styles from './PageError.module.css'

const PageError = () => {
  return (
    <React.Fragment>
      <h2 className={styles.subtitle}>Página não encontrada</h2>
      <div className={styles.texts}>
        <span className={styles.text_big}>Erro 404</span> <br />
        <strong className={styles.text_purple}>Página não encontrada</strong>
      </div>
    </React.Fragment>
  )
}

export default PageError
