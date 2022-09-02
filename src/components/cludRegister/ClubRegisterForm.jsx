
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './ClubRegisterForm.css'
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';
import axios from 'axios';

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const ClubRegisterForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };


  return (
    <div className='createClubContainer'>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
        className='createClubForm'
      >
        <Form.Item
          name="president"
          label="President Name"
          rules={[
            {
              required: true,
              message: 'Please input club president name!',
              whitespace: true,
            },
          ]}
        >
          <Input
            allowClear="true"
            className='inputClubForm'
          />
        </Form.Item>

        <Form.Item
          name="presidentId"
          label="President's ID"
          rules={[
            {
              required: true,
              message: 'Please input president ID!',
              whitespace: true,
            },
          ]}
        >
          <Input
            allowClear="true"
            className='inputClubForm'
          />
        </Form.Item>

        <Form.Item
          name="clubname"
          label="Club Name"
          tooltip="What do you want others to call your club?"
          rules={[
            {
              required: true,
              message: 'Please input club name!',
              whitespace: true,
            },
          ]}
        >
          <Input
            allowClear="true"
            className='inputClubForm'
          />
        </Form.Item>

        <Form.Item
          name="slogan"
          label="Slogan"
          rules={[
            {
              required: false,
              message: 'Please enter Club Slogan',
            },
          ]}
        >
          <Input.TextArea showCount maxLength={100} allowClear="true" className='inputClubForm' id="slogan" />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input
            allowClear="true"
            className='inputClubForm'
          />
        </Form.Item>

        <Form.Item
          name="ctype"
          label="Club Type"
          rules={[
            {
              required: true,
              message: 'Please select club type!',
            },
          ]}
        >
          <Select placeholder="Select club type" className='inputClubForm'>
            <Option value="sports">Sport</Option>
            <Option value="academic">Academic</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>


        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>

  );
};

export default ClubRegisterForm;