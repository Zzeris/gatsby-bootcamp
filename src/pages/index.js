import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'

const IndexPage = () => {
    return (
        <div>
            <Header />
            <h1>Olá!</h1>
            <Link to="/about">Sobre mim.</Link>
            <Footer />
        </div>
    )
}

export default IndexPage