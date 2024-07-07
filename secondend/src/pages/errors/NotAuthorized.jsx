import React from 'react'
import {Link} from 'react-router-dom' 

const NotAuthorized = () => {
  return (
    <>
    <div> You are Not Authorized to be here. </div>
    <Link to="/login">Login</Link>  
    </>
  )
}

export default NotAuthorized;