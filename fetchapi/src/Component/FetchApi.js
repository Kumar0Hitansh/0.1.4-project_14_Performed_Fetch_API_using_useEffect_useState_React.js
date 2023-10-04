import React,{useState,useEffect} from 'react'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';


function FetchApi() {
    let [records,apidata]=useState([]) ;

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>apidata( data))
        .catch(ree=>console.warn("error"))
    },[])

    
  return (

<>


      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#"></Navbar.Brand>
        </Container>
      </Navbar>


      <h1>Fetching Api data using useState , useEffect , https://jsonplaceholder.typicode.com/users</h1>


     <Table striped bordered hover variant="dark" className='mt-5' >
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Compant</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>#</td>
          <td>hitansh</td>
          <td>hitansh1611189</td>
          <td>hitansh1611189@gmail.com</td>
          <td>B-123 , vigyan nagar kota</td>
          <td>9079746497</td>
          <td>gethitansh.netlify.app</td>
          <td>fox.pvt.ltd</td>
        </tr>
        
        {records.map((list,index)=>(
            <tr key={index}>
            <td>{list.id}</td>
          <td>{list.name}</td>
          <td>{list.username}</td>
          <td>{list.email}</td>
          <td>{list.address.street} , {list.address.city}</td>
          <td>{list.phone}</td>
          <td>{list.website}</td>
          <td>{list.company.name}</td>
          </tr>)
        )}
      </tbody>
    </Table>

  
</>
  )
}
export default FetchApi