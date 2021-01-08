import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import back from '../assets/img/back.png'
import checked from '../assets/img/checked.png'
import flag from '../assets/img/flag.png'
import dot_gray from '../assets/img/dot-gray.png'
import shuffle from '../assets/img/shuffle.png'
import back_dot from '../assets/img/back-dot.png'
import checklist from '../assets/img/checklist.png'

import '../assets/scss/pageheader.scss'

const PageHeader = (props) => {

    return (
        <section className="page-header">
            <Container>
                <div className="nav-panel">
                    <Row className="justify-content-lg-between">
                        <Col xs={12} xl={2}>
                            <a className="back-btn" href="!#">
                                <img src={back} alt="Back"/>
                                Back to Connectio
                            </a>
                        </Col>
                        <Col className="header-links-wrapper" xs={12} xl={8}>
                            <ul>
                                <li>
                                    <a href="!#">
                                        <img src={checked} alt="Checked"/>
                                        Layering
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <img src={checked} alt="Checked"/>
                                        Campaign
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <img src={flag} alt="Flag"/>
                                        Adsets
                                    </a>
                                </li>
                                <li>
                                    <a className="disabled" href="!#">
                                        <img src={dot_gray} alt="Dot"/>
                                        Preferences
                                    </a>
                                </li>
                                <li>
                                    <a className="disabled" href="!#">
                                        <img src={dot_gray} alt="Dot"/>
                                        Ads
                                    </a>
                                </li>
                                <li>
                                    <a className="disabled" href="!#">
                                        <img src={dot_gray} alt="Dot"/>
                                        Summary
                                    </a>
                                </li>
                            </ul>
                            <div className="line-through"></div>
                        </Col>
                        <Col className="text-center" xs={12} xl={2}>
                            <a className="test-audiences" href="!#">Test Audiences</a>
                        </Col>
                        <Col xs={12}>
                            <div className="adsets-headers">
                                <img src={checklist} alt="Checklist"/>
                                <h2>How many adsets to create?</h2>
                                <button>
                                    <img src={shuffle} alt="Shuffle"/>
                                    Shuffle Audiences
                                </button>
                                <button onClick={() => props.undo()}>
                                    <img src={back_dot} alt="Back"/>
                                    Undo
                                </button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}



export default PageHeader;
