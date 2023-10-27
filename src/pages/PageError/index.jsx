import React from 'react'
import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'

const PageError = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <h2>Página não encontrada</h2>
        <div>
          <span>Erro 404</span> <br />
          <strong>Página não encontrada</strong>
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  )
}

export default PageError
