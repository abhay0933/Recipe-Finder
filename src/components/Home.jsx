import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='homeimgcontainer'>
        <Link to='/foods' >
            <button>Search for Recipes</button>
        </Link>
    </div>
  )
}

export default Home;