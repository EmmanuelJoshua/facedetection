import React from 'react'
import { Container, Nav, Button } from 'react-bootstrap'

const Navigation = ({ onRouteChange, route }) => {
    return (
        <div className='NavBar p-2'>
            <Container >
                <Nav>
                    <div className='ml-auto'>
                        {
                            route === 'home' ?
                                <Button className='SignOut' onClick={() => onRouteChange('signin')}>
                                    Sign Out
                                </Button>
                                : (
                                    route === 'signin' ?
                                        <Button className='SignOut' onClick={() => onRouteChange('register')}>
                                            Register
                                        </Button>
                                        :
                                        <Button className='SignOut' onClick={() => onRouteChange('signin')}>
                                            Login
                                        </Button>
                                )
                        }
                    </div>
                </Nav>
            </Container>
        </div>
    );
}

export default Navigation;