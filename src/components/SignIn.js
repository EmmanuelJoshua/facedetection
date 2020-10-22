import React from 'react'
import { Col, FormGroup, FormControl, Button, FormLabel } from 'react-bootstrap'

const SignIn = ({onRouteChange}) => {
    return (
        <Col md='5' className='Login mt-md-5 m-3 m-md-0 p-0'>
            <div className='SectionOne d-flex align-items-center'>
                <div></div>
                <p className='pt-3 pl-2'>Login</p>
            </div>

            <div className='SectionTwo pl-3 pr-3'>
                <FormGroup>
                    <FormLabel className='FormLabel'>
                        Email
                </FormLabel>
                    <FormControl
                        className='UrlText'
                        aria-describedby='basic-addon2'
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel className='FormLabel'>
                        Password
                </FormLabel>
                    <FormControl
                        className='UrlText'
                        aria-describedby='basic-addon2'
                    />
                </FormGroup>
            </div>

            <div className='SectionThree d-flex justify-content-center align-items-center pl-3 pr-3'>
            <Button variant='outline-secondary' block='true' className='RegisterBtn' onClick={() => onRouteChange('home')}>
                  Login
                </Button>
            </div>
        </Col>
    );
}

export default SignIn;