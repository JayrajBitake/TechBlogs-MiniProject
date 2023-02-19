import React from 'react';
import { Card , CardBody , CardSubtitle , CardText ,  Button , Container } from 'reactstrap';

const Course = ({course})=>{
    return(
        <Card className="text-center">
            <CardBody className="text-center">
                <CardSubtitle className='font-weight-bold'>{course.title} </CardSubtitle>
                    <CardText>{course.content}</CardText>
                    <CardText>{course.date}</CardText>
                    <Container className="text-center">
                        <Button color='danger' outline>DELETE</Button>
                        <Button color='warning ml-3' outline>UPDATE</Button>
                    </Container>
            </CardBody>
        </Card>
    )
}

export default Course;
