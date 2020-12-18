import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import {Link} from 'react-router-dom';
import { register } from '../../api/auth';
import "./register.css"
import Navbar from "../navBar/NavBar";

function Register() {
  const onFinish = (values) => {
    console.log('Success:', values);
    register(values)
  };



  return (
    <>
    <Navbar/>
    <Form
      name="basic"
      className="register-form"
      initialValues={{ remember: true }}
  onFinish={onFinish}

>
  <h1> Register</h1>
  <Form.Item
    label="Username"
    name="name"
    rules={[{ required: true, message: 'Please input your username!' }]}
  >
    <Input />
  </Form.Item>

  <Form.Item
    label="Email"
    name="email"
    rules={[{ required: true, message: 'Please input your email!' }]}
  >
    <Input />
  </Form.Item>

  <Form.Item
    label="Password"
    name="password"
    rules={[{ required: true, message: 'Please input your password!' }]}
  >
    <Input.Password />
  </Form.Item>


  <Form.Item
    label="Confirm Password"
    name="password2"
    rules={[{ required: true, message: 'Please input your password!' }]}
  >
   <Input.Password />
  </Form.Item>
    <Form.Item
    label="Phone"
    name="phone"
    rules={[{ required: true, message: 'Please input your phone!' }]}
  >
       <Input />
  </Form.Item>


  <Form.Item>
        <Button type="primary" htmlType="submit">
      Register
    </Button>
    &emsp; Or 
        <Link to="/login">Login</Link>
  </Form.Item>
</Form>
</>)
}

export default Register;