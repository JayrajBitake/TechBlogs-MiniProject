import React from 'react'
import { Link } from 'react-router-dom'
import { Container, ListGroup, ListGroupItem} from 'reactstrap'
import bg1 from './bg1.jpg'

const ViewBlogMenu=() => {
  return (
    <div>
     <ListGroup>
  <Link className='list-group-item list-group-item-action'tag="a" to='/' action>
  Home
  </Link >
  <Link className='list-group-item list-group-item-action'tag="a" to='/login' actione>
  Logout
  </Link>
  <Link className='list-group-item list-group-item-action'tag="a" to='/signup' actione>
  Signup/Register
  </Link>
  {/* <Link className='list-group-item list-group-item-action'tag="a" to='/add-course' action>
  Add Course
  </Link> */}
  {/* <Link className='list-group-item list-group-item-action'tag="a" to='/view-course' action>
  View Courses
  </Link> */}
  {/* <Link className='list-group-item list-group-item-action'tag="a" to='/about-us' action>
  About Us
  </Link>
  <Link className='list-group-item list-group-item-action'tag="a" to='/contact-us' action>
  Contact Us
  </Link> */}
</ListGroup>

    <Container>
    <div>
                <img src={bg1} className="d-block w-100 p-2" alt="..." />
    </div>            
    </Container>

    </div>
  )
}

export default ViewBlogMenu;
