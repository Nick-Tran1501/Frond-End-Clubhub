import React, { useState, useEffect } from 'react'
import { Form, Button, Checkbox, Input, Select, Typography, } from 'antd'
import './ClubRegisterForm.css'
import TextArea from 'antd/lib/input/TextArea'
import { sendCreateClubRequest } from './createClub'

const { Option } = Select

const ClubRegisterForm = () => {

  const [acceptPolicy, setAcceptPolicy] = useState(false)
  const [newClub, setNewClub] = useState({
    name: "",
    email: "",
    slogan: "",
    description: "",
    category: ""
  })


  return (
    <div className='Container'>
      <header className='Form'>
        <Typography.Title>Request to create a new club</Typography.Title>

        <Form labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
          <Form.Item name={"clubname"} label={"Club name"} rules={[{ required: true, message: "Please enter your club name" }]}>
            <Input placeholder='Enter your new club name' maxLength={30} />
          </Form.Item>

          <Form.Item name={"email"} rules={[{ required: true, message: "Enter an email as your club contact method" }]} label="Club Email">
            <Input type='email' maxLength={30} placeholder="Email for other user to contact your club" />
          </Form.Item>

          <Form.Item name={"slogan"} label="Slogan">
            <TextArea maxLength={50} placeholder="Your club slogan" />
          </Form.Item>


          <Form.Item name={"description"} label="Description">
            <TextArea maxLength={100} showCount placeholder='A short description about your club' />
          </Form.Item>
          <Form.Item name={"category"}
            label="Category"
            rules={[{ required: true, message: "Please select one category" }]}

          >
            <Select
              placeholder="Your club category"
              defaultValue={"Tech"}
              onChange={(e) => { console.log(e) }}
            >
              <Option value="Tech">Tech</Option>
              <Option value="Academic">Academic</Option>
              <Option value="Sport">Sport</Option>
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 24 }}>
            <Checkbox onChange={(e) => setAcceptPolicy(e.target.checked)}>By submiting this form, I agree to ClubHub's user policy</Checkbox>
          </Form.Item>



          <Form.Item wrapperCol={{ span: 24 }}>
            <Button type="primary" block disabled={!acceptPolicy}>
              Submit to admin
            </Button>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 24 }}>
            <Button type="danger" block>
              Cancel
            </Button>
          </Form.Item>

        </Form>
      </header>
    </div>
  )
}

export default ClubRegisterForm