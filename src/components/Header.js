import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Register from './Register';
import Login from './SignIn'
import MainHeader from './MainHeader'

const Header = ({ route, box, imageUrl, onButtonDetect, onURLChange, onRouteChange }) => {
    return (
        <div className='Header'>
            <Container>
                <Row>
                    <Col md='7' className='HeaderText'>
                        <h1>Face.</h1>
                        <h1>Detection.</h1>
                        {
                            route === 'home' ?
                                <Row>
                                    <Col md='9'>
                                        <p className='lead'>This magic brain would detect faces in your pictures. Copy the URL of an image into the textfield, and click detect. Give it a try!</p>
                                    </Col>
                                </Row>
                                :
                                (
                                    route === 'signin' ?
                                        <Row>
                                            <Col md='9'>
                                                <p className='lead'>This magic brain would detect faces in your pictures. Login and detect faces with a button!</p>
                                            </Col>
                                        </Row> :
                                        <Row>
                                            <Col md='9'>
                                                <p className='lead'>This magic brain would detect faces in your pictures. Register and detect faces with a button!</p>
                                            </Col>
                                        </Row>
                                )
                        }
                    </Col>
                    {
                        route === 'home' ? <MainHeader box={box} imageUrl={imageUrl} onButtonDetect={onButtonDetect} onURLChange={onURLChange} />
                            : (
                                route === 'signin' ?
                                    <Login onRouteChange={onRouteChange} /> :
                                    <Register />
                            )
                    }
                </Row>
            </Container>
        </div>

    );
}

export default Header;