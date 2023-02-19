import {Container} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useEffect, useState} from "react";
import TutorialDataService from "../services/blog.service";
import Menu from "./Menu";


import NavDropdown from 'react-bootstrap/NavDropdown';
import ViewBlogMenu from "./ViewBlogMenu";
export function ViewBlog() {
    const [blogList, setBlogList] = useState([]);
    const [selectedBlogId, setSelectedBlog] = useState([]);
    async function getAllBlogs() {

        const response = await TutorialDataService.getAll();
        setBlogList(response.data);
        console.log(response.data.id);
    }
    function onChangeTitle(e) {
        setSelectedBlog({title: e.target.value});
        // console.log(e.target.value);
        // console.log(selectedBlogId.title);


    }
    async function getBlogByName(title) {
        const response = await TutorialDataService.get(selectedBlogId.title);
        setSelectedBlog(response.data)
        console.log(response.data);


    }


    return (<>

<div>
    <ViewBlogMenu></ViewBlogMenu>
</div>


        <Container className=".container-fluid ,'mb-5' ">
            <Row>

    
                <Col>
                    <Button onClick={getAllBlogs}
                        variant="dark">
                        Get All Blogs
                    </Button>
                </Col>

                <Col>


                    <Form className="d-flex">
                        <Form.Control type="search " placeholder="Search Blogs By Name" className="me-2" aria-label="Search"
                            value={
                                useState.title
                            }
                            onChange={onChangeTitle}
                            name="title"/>
                        <Button variant="outline-success"
                            onClick={getBlogByName}>Search</Button>
                    </Form>
                </Col>

            </Row>
        </Container>
        <Container className=".container-fluid"
            style={
                {display: 'flex'}
        }> {
            blogList.map((blog) => {
                return (<Row>
                    <Col></Col>
                    <Col>
                        <Card style={
                            {width: '18rem', height :'15rem'}
                        }>
                            <Card.Img variant="top" src=""/>
                            <Card.Body>
                                <Card.Title>
                                    <h3> {
                                        blog.title
                                    }</h3>
                                </Card.Title>
                                <Card.Text> {
                                    blog.content
                                } </Card.Text>
                                <a href="https://blogs.oracle.com/java/post/the-arrival-of-java-18">
                                    <Button variant="info">Visit-Blog</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>)


            })
        } </Container>
        {/* <Container className=".container-fluid"
            style={
                {display: 'flex'}
        }> {
            selectedBlogId.map((blog) => {
                return (<Row>
                    <Col></Col>
                    <Col>
                        <Card style={
                            {width: '18rem'}
                        }>
                            <Card.Img variant="top" src=""/>
                            <Card.Body>
                                <Card.Title>
                                    <h3> {
                                        blog.title
                                    }</h3>
                                </Card.Title>
                                <Card.Text> {
                                    blog.content
                                } </Card.Text>
                                <a href="https://blogs.oracle.com/java/post/the-arrival-of-java-18">
                                    <Button variant="info">Visit-Blog</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>)


            })
        } </Container> */} </>);


}