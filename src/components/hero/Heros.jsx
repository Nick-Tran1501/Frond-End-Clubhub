import React from 'react';
import './Heros.css';
// import Typical from 'react-typical';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons'; 
const Hero = () => {
  const navigate = useNavigate()
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
            <br></br>
              <Button 
                onClick={()=>{navigate("/")}} 
                style={{borderRadius:"5px",all:"unset", fontSize:"20px", padding:"1rem"}}
              >
                Back to Log In
                <ArrowLeftOutlined style={{fontSize:"20px", marginBottom:"1rem"}}/>
                </Button>
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