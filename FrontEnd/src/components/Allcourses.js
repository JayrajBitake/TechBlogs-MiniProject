import {useState} from "react";
import {Container} from "react-bootstrap";
import {Alert, Button, Modal, Table} from "react-bootstrap";
import TutorialDataService from "../services/blog.service";
import Menu from "./Menu";
const Allcourses = () => {
    const [blogList, setBlogList] = useState([]);
    async function getAllBlogs() {

        const response = await TutorialDataService.getAll();
        setBlogList(response.data);
        console.log(response.data.id);
    }
    async function deleteBlog(id) {
        const response = await TutorialDataService.delete(id);
        console.log(response.data);
        getAllBlogs();
    }

    return (<>
<div>
    <Menu></Menu>
</div>


        <Container className="mt-4 mb-4 text-center">
            <Alert>
                <button onClick={getAllBlogs}
                    className="btn info">
                    Get Blog List
                </button>
            </Alert>
        </Container>
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>Post-Id</th>
                        <th>Title</th>
                        <th>Content</th>

                        <th>Date</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody> {
                    blogList.map((blog) => {
                        return (<tr>
                            <td> {
                                blog.postId
                            }</td>
                            <td> {
                                blog.title
                            }</td>
                            <td> {
                                blog.content
                            }</td>
                            <td> {
                                blog.date
                            }</td>
                            <td>
                                <Button variant="danger" className="btn-sm"
                                    onClick={
                                        () => {
                                            deleteBlog(blog.postId)
                                        }
                                }>Delete</Button>
                            </td>
                            <td>
                                {/* <Button variant="danger" className="btn-sm"
                                    onClick={
                                        () => {
                                            editBlog(blog.postId)
                                        }
                                }>Update</Button> */}
                            </td>


                        </tr>)
                    })
                } </tbody>
            </Table>
        </Container>


    </>);
}

export default Allcourses
