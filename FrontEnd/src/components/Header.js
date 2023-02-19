import React from 'react'
import { Card, CardBody } from 'reactstrap';

function Header() {
  return (
    <div>
        <Card>
            <CardBody className='my-2 bg-warning'>
                <h1 className='text-center my-2'>Welcome</h1>
            </CardBody>
        </Card>
    </div>
  )
}
export default Header;
