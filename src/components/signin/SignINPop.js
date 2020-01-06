import React, { Component } from "react";
import { Row, Col, Form, Input, Icon, Button } from "antd";
import "./SignIn.css";

import Axios from '../../config/axios.setup'

export class SignINPop extends Component {
  constructor(props){
    super(props)
    this.state = {
        email: '',
        password: ''
    }
}
handleSubmit = (e) => {
  e.preventDefault()
  const email = this.state.email
  const password = this.state.password
  Axios.post('http://localhost:8080/loginUser',{email,password})
    .then(result => {
      console.log(result.data)
      console.log('success')
      // successLoginNotification('success')
      localStorage.setItem("ACCESS_TOKEN", result.data.token)
      this.props.history.push('/')
      window.location.reload(true);
    })
    .catch(err => {
      console.error(err)
      // failLoginNotification(err.response.data.message)
    })
}
  render() {
    return (
      <Row type="flex" justify="center">
        <Col span={24}>
          <h2>SIGN IN</h2>
          <p>Sign in with your email and password.</p>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Row>
              <Form.Item label="EMAIL ADDRESS" className="item">
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="E-mail"
                  onChange={(e)=>this.setState({email: e.target.value})}
                />
              </Form.Item>
            </Row>
            <Row>
              <Form.Item label="PASSWORD" className="item">
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                  onChange={(e)=>this.setState({password: e.target.value})}
                />
              </Form.Item>
            </Row>

            <Form.Item
              style={{
                marginBottom: "0"
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                SIGN IN
              </Button>
              <Row type="flex" justify="center">
                <Col span={4}>
                  <i>OR</i>
                </Col>
              </Row>

              <Button
                type="primary"
                href="/register"
                className="login-form-button"
              >
                REGISTER
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default SignINPop;
