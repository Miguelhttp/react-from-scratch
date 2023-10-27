import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import styles from './Project.module.css'

const Project = () => {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    const searchRepositories = async () => {
      const response = await fetch(
        'https://api.github.com/users/Miguelhttp/repos?page=1&per_page=50',
      )

      const data = await response.json()
      setRepositories(data)
    }
    searchRepositories()
  }, [])

  return (
    <React.Fragment>
      <section className={styles.project}>
        <h2>Projetos</h2>
        {repositories.length > 0 ? (
          <section className={styles.list}>
            {repositories.map((repository) => (
              <Card
                key={repository.id}
                name={repository.name}
                description={repository.description}
                htmlUrl={repository.html_url}
              />
            ))}
          </section>
        ) : (
          <p>Carregando repositórios...</p>
        )}
      </section>
    </React.Fragment>
  )
}

export default Project
