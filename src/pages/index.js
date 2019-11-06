import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h1>Olá!</h1>
            <Link to="/about">Sobre mim.</Link>
        </Layout>
    )
}

export default IndexPage