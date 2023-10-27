import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import { Outlet } from 'react-router-dom'

const PageBase = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </React.Fragment>
  )
}

export default PageBase
