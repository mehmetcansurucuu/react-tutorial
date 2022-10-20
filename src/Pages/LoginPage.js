import React from 'react'
import Login from '../Components/Login'
import Slider from '../Components/Slider'

import { Space, Row, Col, } from 'antd';


function LoginPage() {
  return (
    <>
      <Row justify="space-around" align="middle">
          <Col xs={24} sm={24} md={8} lg={8} xl={6} style={{textAlign:"center",padding:"15px"}}>
              <Space align="center">
                  <Login />
              </Space>
          </Col>
          <Col xs={24} sm={24} md={16} lg={16} xl={18} className={"mobileHidden"}>
              <Slider />
          </Col>
      </Row>
    </>
  )
}

export default LoginPage