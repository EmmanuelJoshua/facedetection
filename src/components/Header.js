import React from 'react'
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'
import FaceRecognition from './FaceRecognition';

const Header = ({box, imageUrl, onButtonDetect, onURLChange}) => {
    return (
        <div className='Header'>
            <Container>
                <Row>
                    <Col md='7' className='HeaderText'>
                        <h1>Face.</h1>
                        <h1>Detection.</h1>
                        <Row>
                            <Col md='9'>
                                <p className='lead'>This magic brain would detect faces in your pictures. Copy the URL of an image into the textfield, and click detect. Give it a try!</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col md='5' className='MainHeader mt-md-5 m-3 m-md-0 p-0 text-center'>
                        <div className='SectionOne d-flex justify-content-center align-items-center pt-3'>
                            <p>User, your current rank is </p> <p className='Rank'>1</p>
                        </div>

                        <FaceRecognition box={box} imageUrl={imageUrl}/>
                        
                        <div className='SectionTwo d-flex justify-content-center align-items-center pl-3 pr-3'>
                            <InputGroup>
                                <FormControl
                                    onChange={onURLChange}
                                    className='UrlText'
                                    placeholder='Type image url here'
                                    aria-label='Type image url here'
                                    aria-describedby='basic-addon2'
                                />
                                <InputGroup.Append>
                                    <Button variant='outline-secondary' className='Detect' onClick={onButtonDetect}>
                                        Detect
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default Header;