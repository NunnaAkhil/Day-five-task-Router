import Button from 'react-bootstrap/Button';
import React from 'react'
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div>
      <h4>Please Enter Correct URL</h4>
      <Button variant="success"><Link to="home">Home Page</Link></Button>
    </div>
  )
}
