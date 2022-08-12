
import React from "react"
import 'antd/dist/antd.css';

import "./css/Login.css"

import { Button, Form, Input, Checkbox , Space, Tooltip} from 'antd';
import { UserOutlined, InfoCircleOutlined, LockOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';




const LoginForm = () => {

  const OnChange = (e) =>{
    console.log(`checked = ${e.target.checked}`)
  }
  return(
    <React.Fragment>
      <div
        className="LoginCotainer"
      >
        <h1
          style={{
            color:"white"
          }}
        >Login</h1>

        <Form
          className="InputForm"
          style={{
            color:"white"
          }}
        >
          <Form.Item>
            <Input 
              size="large" 
              placeholder="Enter Your Username" 
              prefix={<UserOutlined 
                style={{
                  
                }}
              />}
              suffix={
                <Tooltip title="Your Username">
                  <InfoCircleOutlined
                    style={{
                      color:"white"
                    }}
                  />
                </Tooltip>
              }
              style={{
                color:"white"
              }}
              className="LoginItems"
              required
            />
          </Form.Item>
          
          <Form.Item>
            <Input.Password
              size="large" 
              placeholder="Enter Your Password"
              iconRender={(visible) => (visible ? <EyeTwoTone
                  style={{
                    color:"white"
                  }}
                /> : <EyeInvisibleOutlined 
                  style={{
                    color:"white"
                  }}
                />)}
              prefix={<LockOutlined
                  
                />}
              className="LoginItems"
              required
              style={{
                color:"white"
              }}
            />
          </Form.Item>

          <Form.Item
            style={{
              textAlign:"left"
              
            }}
          >
            <Checkbox
              style={{
                color:"white"
              }}
              onChange={OnChange}
            >
              Remember me
            </Checkbox>
          </Form.Item>

          <Button 
            type="primary" 
            shape="round" 
            size="large"
            htmlType="submit"
            style={{
              width:"15rem",
              height:"3rem",
              marginTop:"2rem"
              
            }}
          >
            Login
          </Button>
        </Form>

          <div
          >
            <Button 
              type="text"
              shape="round"  
              size={"large"}
              style={{
                textDecoration:"underline",
                color:"white"
                
              }}
            >
              <p
                style={{
                  color:"white"
                }}
              >

                Forget Password
              </p>
          </Button>

        </div>
                  
      </div>

    </React.Fragment>
  )
}

export default LoginForm