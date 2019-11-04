import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'

const AboutPage = () => {
    return(
        <div>
            <Header />
            <h1>Quem é José Luiz?</h1>
            <p>Desenvolvedor full cycle, atualmente desenvolvendo em NodeJS e ReactJS.</p>
            <p><Link to="/contact">Quer trabalhar comigo?</Link></p>
            <Footer />
        </div>
    )
}

export default AboutPage