import React from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import MainMenu from '../specificMenu/MainMenu';
import MainMenu from '../specificMenu/MainMenu';

const Addcourse =() =>{
  return (

    
    <div>

<div>
<MainMenu></MainMenu>
</div>


        <h1 className='text-center my-3'>Add Course</h1>
       <Form>
  <FormGroup>
    <Label for="exampleNumber">
      Course Id
    </Label>

    <Input
      id="exampleNumber"
      name="number"
      placeholder="number placeholder"
      type="number"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleTitle">
      Title
    </Label>

    <Input
      id="exampleTitle"
      name="text"
      placeholder="title placeholder"
      type="text"
    />
  </FormGroup>
 
  <FormGroup>
    <Label for="exampleDate">
      Date
    </Label>
    <Input
      id="exampleDate"
      name="date"
      placeholder="date placeholder"
      type="date"
    />
 
  </FormGroup>
    
  <FormGroup>
    <Label for="exampleText">
      Text Area
    </Label>
    <Input
      id="exampleText"
      name="text"
      type="textarea"
    />
  </FormGroup>
  <Container className="text-center">
                        <Button color='danger' outline>Add Course</Button>
                        <Button color='warning ml-3' outline>Clear</Button>
                    </Container>
                

</Form>
    </div>
  )
}

export default Addcourse
