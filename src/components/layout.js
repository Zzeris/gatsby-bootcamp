import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'

import '../styles/index.css'
import layoutStyles from './layout.module.css'

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout