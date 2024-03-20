import Card from 'react-bootstrap/Card';
import { Col, Container, Row, Image } from 'react-bootstrap';
import schumiImage from '../assets/images/trending/Poster_Film_Schumacher.jpg'
import downfallImage from '../assets/images/trending/aaaabylwnujrixg2f7t1j4ir43mdhagfykpskocr57f_goah5rpcasyl2eznwcoegdih7paktyiaa2wj2ermfdpmtzqcsfbvhzxfedgjeip8jamedktdag1esfgpgfza.jpg'
import volcanoImage from '../assets/images/trending/MV5BMWM0YzgzYTAtZGZhYi00ZWIyLTliN2UtMWRmNjAxOTk5ZTdjXkEyXkFqcGdeQXVyMTMzNzIyNDc1._V1_.jpg'
import operationImage from '../assets/images/trending/OperationFinale.jpg'
import battleImage from '../assets/images/trending/wU8ijITXE2ZgoXJexTQByJiHCbp.jpg'
import leavetheworldImage from '../assets/images/trending/leave-the-world-behind_43.jpeg'

const trending = () => {
    return (
        <div>
            <Container>
                    <h1 className='trending-movie'>TRENDING MOVIE</h1>
                <Row>
                    <Col md={4} className='movieWrapper' id='trending'>
                        <Card className="movieImage">
                            <Image src={schumiImage} alt="Schumacher" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Card title</Card.Title>
                                    <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={downfallImage} alt="Down Fall : Boeing" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Card title</Card.Title>
                                    <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={volcanoImage} alt="Volcano" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Card title</Card.Title>
                                    <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={operationImage} alt="Schumacher" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Card title</Card.Title>
                                    <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={battleImage} alt="Schumacher" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Card title</Card.Title>
                                    <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={leavetheworldImage} alt="Schumacher" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Card title</Card.Title>
                                    <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default trending