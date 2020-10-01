import React from 'react'
import { Container, Image } from 'react-bootstrap'

const FaceRecognition = () => {
    return (
        <div className='FaceRecognition'>
            <Container fluid='true'>
                <Image fluid
                    className='Image'
                    src={'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}
                />
            </Container>
        </div>

    );
}

export default FaceRecognition;