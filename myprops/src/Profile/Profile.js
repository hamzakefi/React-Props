import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Profile/Logo.jpg'


const Profile= (props) => {
  return (
    <div>


<Card style={{ width: '30rem' }}>
      <Card.Img className='Logo' src={Logo}  />
      <Card.Body>
        <Card.Title>Profile</Card.Title>
        <Card.Text>
        web developer is a computer scientist specializing in programming or partially involved in the development of web applications,
         
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.Name}   </ListGroup.Item>
        <ListGroup.Item>{props.LasteName}</ListGroup.Item>
        <ListGroup.Item>{props.Bio}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://www.facebook.com/hamza.kefi1/">Facebook</Card.Link>
        <Card.Link href="https://tn.linkedin.com/in/hamza-kefi-744b77240?trk=people-guest_people_search-card"> LinkdIn</Card.Link>
      </Card.Body>
    </Card>



  
    </div>
  )
}
export default Profile;
