import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ProfilePage() {
  return (
    <div>
        <div>ProfilePage</div>
        <Button variant='light'><Link to="/home">Home Page</Link></Button>
    </div>
  )
}
