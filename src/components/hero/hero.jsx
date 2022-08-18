import React from 'react';
import './hero.css';
// import Typical from 'react-typical';

function hero() {
  return (
    <div className='heroContainer'>
      <div className='hero'>
        <div className='heroContent'>
          <div className='text-1'>Welcome to</div>
          <div className='text-2'>CLUBHUB RMIT VIETNAM</div>
          <div className='text-3'>And we are
            <span> The way finders
              {/* <Typical 
              loop={Infinity}
              wrapper="b"
              steps={[
                ' The way finder',
                1000,
                ' Website Developers', 
                1000
              ]} /> */}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default hero