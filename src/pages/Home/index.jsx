import React from 'react'

import './Home.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <React.Fragment>
      <Header />
      {/* Conteúdo */}
      <section className="container">
        <div className="apresentacao">
          <p>
            Hello, I am <br />
            <span>Miguel Braga</span> <br />
            Dev Front End
          </p>

          <Link to="/about" className="btn btn-purple">
            Read More
          </Link>
        </div>

        <figure>
          <img
            className="img-home"
            src="/developer-front.svg"
            alt="Imagem de Home"
          />
        </figure>
      </section>
      <Footer />
    </React.Fragment>
  )
}

export default Home
