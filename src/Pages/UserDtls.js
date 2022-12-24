import React from 'react'
import { useParams } from 'react-router-dom'

const UserDtls = () => {

    const parms=useParams();
   

  return (
    <div>User Dtls {parms.userId}</div>
  )
}

export default UserDtls