import React from 'react'
import { Container } from 'react-bootstrap'

import back from '../assets/img/back.png'

const PageFooter = () => {
    return (
        <footer>
            <Container>
                <a className="back-btn" href="!#">
                    <img src={back} alt="Back"/>
                    <span>Back</span>
                </a>
                <a className="continue-btn" href="!#">Continue</a>
            </Container>
        </footer>
    )
}



export default PageFooter
