import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
    return(
        <Layout>
            <h1>Quem é José Luiz?</h1>
            <p>Desenvolvedor full cycle, atualmente desenvolvendo em NodeJS e ReactJS.</p>
            <p><Link to="/contact">Quer trabalhar comigo?</Link></p>
        </Layout>
    )
}

export default AboutPage