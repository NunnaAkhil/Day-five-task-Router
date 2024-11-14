import React from 'react'
import ProfileTitle from './ProfileTitle'
import DateOfBirth from './DateOfBirth'
import ActivityLevel from './ActivityLevel'
import Statistics from './Statistics'
import SocialMedia from './SocialMedia'
import { Link } from 'react-router-dom'

const Dob=<p>Active | Male | 09/09/2021</p>

export default function Card() {
  return (
    <div className='card'>
     <Link to="/profile">click</Link>
        <p>Profile</p>
      <img className='profile-image' src='/public/profile.png'/>
      <ProfileTitle profile={"Ravi"}/>
      <DateOfBirth dob={Dob}/>
      <hr/>
      <ActivityLevel/>
      <Statistics/>
      <hr/>
      <SocialMedia/>
    </div>
  )
}
