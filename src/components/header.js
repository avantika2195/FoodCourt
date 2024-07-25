import React from 'react'
import {ImSpoonKnife} from 'react-icons/im'

function header() {
  return (
    <div>
       <header className='header' style={{ backgroundImage: `` }}>
        <div className='layer'>
        <div className="container">
          <nav className='logo-wrapper'>
            <div className='logo'>
              <ImSpoonKnife className='brand' />
            </div>
          </nav>
          <div className='header-text' >
            <h1>Recipe App Reactjs</h1>
            <p>Let's have fun building this app together...</p>
          </div>

        </div>
        </div>
      </header>
    </div>
  )
}

export default header
