import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return(
        <div>
            <h1>Quem é José Luiz?</h1>
            <p>Desenvolvedor full cycle, atualmente desenvolvendo em NodeJS e ReactJS.</p>
            <p><Link to="/contact">Quer trabalhar comigo?</Link></p>
        </div>
    )
}

export default AboutPage