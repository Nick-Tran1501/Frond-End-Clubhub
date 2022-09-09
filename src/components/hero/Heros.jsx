import React from 'react';
import './Heros.css';
// import Typical from 'react-typical';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='heroContainer'>
      <div className='hero'>
        <div className='heroContent'>
          <div className='text-1'>Welcome to</div>
          <div className='text-2'>CLUBHUB RMIT VIETNAM</div>
          <div className='text-3'>And we are
            <span>
              <TypeAnimation
                sequence={[
                  ' The way finder',
                  1000,
                  ' Website Developers', 
                  1000
                ]}
              wrapper="b"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '2em' }}
              />
            </span>
            {/* <span> */}
              {/* <Typical 
              loop={Infinity}
              wrapper="b"
              steps={[
                ' The way finder',
                1000,
                ' Website Developers', 
                1000
              ]} /> */}
            {/* </span> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;