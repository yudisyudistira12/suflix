import { Button, Col, Container, Row } from 'react-bootstrap';

const intro = () => {
    return (
        <div className='intro'>
        <Container className='text-white text-center d-flex justify-content-center align-items-center'>
          <Row>
            <Col>
              <div className='title'>IT'S TIME TO SAY GOODBYE</div>
              <div className='title'>SUBCRIBE MOVIE</div>
              <div className='introButton mt-4 text-center'>
                <Button variant='dark'>See All Movie</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default intro