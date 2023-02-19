import {Container} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert';

export function UserRegistrationForm() {

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col> {
                    ['info',].map((variant) => (
                        <Alert key={variant}
                            variant={variant}
                            style={
                                {
                                    textAlign: "center",
                                    color: "red"
                                }
                        }>
                            Register Here..!
                        </Alert>
                    ))
                }
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name"/>

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email"/>

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Register
                        </Button>


                    </Form>
                </Col>
                <Col></Col>


            </Row>

        </Container>


    );


}
