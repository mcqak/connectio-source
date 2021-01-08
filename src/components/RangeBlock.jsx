import React from 'react'
import { 
    Row, 
    Col,
    Container
} from 'react-bootstrap'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

import '../assets/scss/range.scss'

const RangeBlock = (props) => {

    const { rangeValue, setRangeValue } = props;

    const rangeLabels = {
        1: '1', 
        2: '2', 
        3: '3', 
        4: "4", 
        5: '5', 
        6: '6'
    }

    const createScale = () => {
        let scale = [];
        for (let i = 0; i < 60; i++) {
            scale.push(<div key={i} className="vertical-line"></div>)
        }
        return scale;
    }

    return (
        <Container>
            <section className="adsets-info-and-range">
                <Row>
                    <Col xs={3} className="adsets-info-wrapper">
                        <div className="adsets-info">
                            <p><span>$15 000</span> campaign budget</p>
                            <p><span>22</span> interests</p>
                        </div>
                    </Col>
                    <Col xs={6} className="adsets-range-wrapper">
                        <div className="adsets-range">
                            <Slider 
                                min={1}
                                max={6}
                                step={1}
                                value={rangeValue}
                                tooltip={false}
                                handleLabel={rangeValue.toString()}
                                onChange={(value) => setRangeValue(value)}
                                labels={rangeLabels}
                            />
                            <div className="scale">
                                { createScale() }
                            </div>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className="create-adsets-btn-wrapper">
                            <button disabled>Create adsets</button>
                        </div>
                    </Col>
                </Row>
            </section>
        </Container>
    )
}




export default RangeBlock;