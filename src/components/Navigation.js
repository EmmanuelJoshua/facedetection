import React from 'react'
import { Container, Nav, Button } from 'react-bootstrap'

const Navigation = () => {
    return (
        <div className='NavBar p-2'>
            <Container >
                <Nav>
                    <div className='ml-auto'>
                        <Button className='SignOut'>
                            Sign Out
                            </Button>
                    </div>
                </Nav>
            </Container>
        </div>
    );
}

export default Navigation;