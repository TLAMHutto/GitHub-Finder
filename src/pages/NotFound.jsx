import React from 'react'
import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className='hero'>
      <div className="text-center hero-content">
        <h1 className='text-6xl mb-4'>404</h1>
        <h2 className='text-3xl mb-4'>Page not found</h2>
        <Link to='/' className='btn btn-primary'>
          <FaHome className='mr-2' />
          Go to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
