import React from 'react'
import Navigation from './nav/Navigation'

const Layout = (props) => {
    return (
        <div>
            <Navigation />
            <main style={{ margin: '3rem auto', width: '90%', maxWidth: '40rem'}}>{ props.children }</main>
        </div>
    )
}

export default Layout
