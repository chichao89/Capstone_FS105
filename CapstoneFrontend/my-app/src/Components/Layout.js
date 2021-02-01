import React from 'react'
import { Container } from 'react-bootstrap'
const Layout = (props) => {
    return (
       <Container className="p-5">
           {props.children}
       </Container>
    )
}

export default Layout
