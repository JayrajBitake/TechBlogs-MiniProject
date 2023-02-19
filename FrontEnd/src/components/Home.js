import React from 'react'
import {Badge} from 'react-bootstrap'
import {Button, Col, Container, Row} from 'reactstrap'
import {Link} from 'react-router-dom'
import MainMenu from '../specificMenu/MainMenu'


const Home = () => {
    return (
        <div>
            <MainMenu></MainMenu>

            <div className="text-center">
                <div className="jumbotron jumbotron-fluid"
                    style={
                        {background: "aqua"}
                }>
                    <div className="container">
                        <br/>
                        <h1>Tech<span className="badge badge-dark">Blogs</span>
                        </h1>
                        <br/>
                        <h4>FullFil your passions, your way</h4>
                        <p>Read a unique and beautiful blog easily.</p>
                        <Container>
                            <Link to="/login">
                                <Button className="text-center" color='primary' outline>Start Learning</Button>
                            </Link>
                        </Container>
                        <br/>

                    </div>

                </div>
            </div>
            <Container className='mb-5'>

                <Row>
                    <Col></Col>
                </Row>
            </Container>
            <Container className='mt-5'>
                <Link to="/login">
                    <Col>


                        <h1>
                            <a href="UserLogin.js">
                                <Badge bg="primary">
                                    Core
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Java

                                </Badge>


                                <Badge bg="secondary">
                                    Database
                                </Badge>

                                <Badge bg="success">
                                    Python
                                </Badge>

                                <Badge bg="danger">
                                    .DotNet
                                </Badge>

                                <Badge bg="warning" text="dark">
                                    React Js
                                </Badge>

                                <Badge bg="info">
                                    Node Js
                                </Badge>


                                <Badge bg="light" text="dark">
                                    Advance Java
                                </Badge>

                                <Badge bg="dark">
                                    Spring Boot
                                </Badge>
                                <Badge bg="secondary">
                                    Database
                                </Badge>

                                <Badge bg="success">
                                    Python
                                </Badge>

                                <Badge bg="danger">
                                    .DotNet
                                </Badge>

                                <Badge bg="warning" text="dark">
                                    React Js
                                </Badge>
                                <Badge bg="secondary">
                                    Database
                                </Badge>

                                <Badge bg="success">
                                    Python
                                </Badge>

                                <Badge bg="danger">
                                    .DotNet
                                </Badge>

                                <Badge bg="warning" text="dark">
                                    React Js
                                </Badge>

                                <Badge bg="info">
                                    Node Js
                                </Badge>


                                <Badge bg="light" text="dark">
                                    Advance Java
                                </Badge>

                            </a>

                        </h1>


                    </Col>
                </Link>

            </Container>

        </div>
    )
}

export default Home
