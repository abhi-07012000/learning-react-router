import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const Navigate =useNavigate();
  return (<>
  <div>Home</div>
  <button onClick={()=>Navigate('order-summury')}>Place Order</button>
  </>
    
  )
}

export default Home