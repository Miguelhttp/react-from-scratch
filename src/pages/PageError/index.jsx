import styles from './PageError.module.css'

const PageError = () => {
  return (
    <section className={styles.page_error}>
      <h2 className={styles.subtitle}>Página não encontrada</h2>
      <div className={styles.texts}>
        <span className={styles.text_big}>Erro 404</span> <br />
        <strong className={styles.text_purple}>Página não encontrada</strong>
      </div>
    </section>
  )
}

export default PageError
