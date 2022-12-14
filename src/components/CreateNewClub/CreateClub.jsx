import React, { useState, useEffect } from 'react'
import { Form, Button, Checkbox, Input, Select, Typography, Modal } from 'antd'
import './CreateClub.css'
import TextArea from 'antd/lib/input/TextArea'
import { sendCreateClubRequest } from './CreateClubAPI'
import { useNavigate } from 'react-router-dom'

const { Option } = Select

const CreateClub = () => {

  const navigate = useNavigate()
  const [acceptPolicy, setAcceptPolicy] = useState(false)
  const [newClub, setNewClub] = useState({
    name: "",
    email: "",
    slogan: "",
    description: "",
    category: ""
  })


  const onClickCancel = () => {
    navigate("/home")
  }

  const onClubNameChange = (e) => {
    const data = { ...newClub, name: e }
    setNewClub(data)
  }

  const onEmailChange = (e) => {
    const data = { ...newClub, email: e }
    setNewClub(data)
  }

  const onSloganChange = (e) => {
    const data = { ...newClub, slogan: e }
    setNewClub(data)
  }

  const onDesChange = (e) => {
    const data = { ...newClub, description: e }
    setNewClub(data)
  }

  const onCategoryChange = (e) => {
    const data = { ...newClub, category: e }
    setNewClub(data)
  }

  const onClickSubmit = () => {
    sendCreateClubRequest(newClub).then(response => {
      if (response.success) {
        Modal.success({
          title: 'Create club successful',
          content: (<Typography.Text>{response.message}</Typography.Text>),
          onOk: () => navigate('/home')
        })
      } else {
        Modal.error({
          title: 'Send create club request failed',
          content: (<Typography.Text>{response.message}</Typography.Text>)
        })
      }
    })
  }



  return (
    <div className='Container'>
      <header className='Form'>
        <Typography.Title>Request to create a new club</Typography.Title>

        <Form labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
          <Form.Item name={"clubname"} label={"Club name"} rules={[{ required: true, message: "Please enter your club name" }]}>
            <Input
              placeholder='Enter your new club name'
              maxLength={30}
              onChange={(e) => onClubNameChange(e.target.value)}
            />
          </Form.Item>

          <Form.Item name={"email"} rules={[{ required: true, message: "Enter an email as your club contact method" }]} label="Club Email">
            <Input
              type='email' maxLength={30}
              placeholder="Email for other user to contact your club"
              onChange={(e) => onEmailChange(e.target.value)}
            />
          </Form.Item>

          <Form.Item name={"slogan"} label="Slogan"
            rules={[{ required: true, message: "Please enter your club slogan" }]}
          >
            <TextArea
              maxLength={50}
              placeholder="Your club slogan"

              onChange={(e) => onSloganChange(e.target.value)}
            />
          </Form.Item>


          <Form.Item name={"description"} label="Description"
            rules={[{ required: true, message: "Please enter your club description" }]}>
            <TextArea
              maxLength={100}
              showCount
              placeholder='A short description about your club'

              onChange={(e) => onDesChange(e.target.value)}
            />
          </Form.Item>
          <Form.Item name={"category"}
            label="Category"
            rules={[{ required: true, message: "Please select one category" }]}

          >
            <Select
              placeholder="Your club category"
              onChange={(e) => onCategoryChange(e)}
            >
              <Option value="Tech">Tech</Option>
              <Option value="Academic">Academic</Option>
              <Option value="Sport">Sport</Option>
              <Option value="Art">Art</Option>
              <Option value="Hobbies">Hobbies</Option>
              <Option value="Games">Games</Option>
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 24 }}>
            <Checkbox onChange={(e) => setAcceptPolicy(e.target.checked)}>By submiting this form, I agree to ClubHub's user policy</Checkbox>
          </Form.Item>


          <Form.Item wrapperCol={{ span: 24 }}>
            <Button type="primary" block disabled={!acceptPolicy} onClick={() => onClickSubmit()}>
              Submit to admin
            </Button>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 24 }}>
            <Button type="danger" block onClick={() => onClickCancel()}>
              Cancel
            </Button>
          </Form.Item>

        </Form>
      </header>
    </div>
  )
}

export default CreateClub