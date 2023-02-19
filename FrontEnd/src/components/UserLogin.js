import {Container} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert';


export function UserLogin() {
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
                                    color: "Orange"
                                }
                        }>
                            Login Form
                        </Alert>
                    ))
                }
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <p>Register Here..</p>

                    </Form>
                </Col>
                <Col></Col>


            </Row>

        </Container>


    );


}
