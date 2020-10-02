import React from 'react'
import { Container, Image } from 'react-bootstrap'

const FaceRecognition = ({box ,imageUrl}) => {
    return (
        <div className='d-flex justify-content-center  '>
              <div className='FaceRecognition '>
            <Container fluid='true'>
                <Image fluid
                    className='Image'
                    id='InputImage'
                    src={imageUrl}
                />
                <div className='BoundingBox' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </Container>
        </div>
        </div>

    );
}

export default FaceRecognition;