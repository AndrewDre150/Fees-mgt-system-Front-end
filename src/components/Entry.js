import React from 'react'
import cover from './images/cover2.jpeg'
import { Link } from 'react-router-dom'

function Notifications(){

  const flexed = {
      display:"flex",
      alignItems:"center",
      gap: 10
  }

  return(
    <div className='child'>
      <div style={flexed}>
        <img src={cover}/>
        <span>By - Andy on <small> 25th june 2020</small></span>
      </div>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <Link>Read More ...</Link><br />
    </div>
  )
}

function Entry() {
  return (
    <div className='parent'>
      <div className='header'>
        <img src={cover} />
        <div>
          <h1>Stratcom Fees <span className='em'>Management Application</span></h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially</p>
          <Link to={'/login'}>Login Now</Link>
        </div>
      </div>
      <div className='notifications'>
          <h2>Notifications</h2>
          <div className='not'>
            <Notifications />
            <Notifications />
            <Notifications />
          </div>

      </div>
    </div>
  )
}

export default Entry