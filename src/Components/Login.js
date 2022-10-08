import React from 'react';
import { Space, Button, Row, Col, Checkbox, Form, Input, Avatar, Image } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Slider from "./Slider"
import 'antd/dist/antd.min.css';

const Login = () =>{

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };


    return(
    <>
         <Row justify="space-around" align="middle">
            <Col xs={24} sm={24} md={8} lg={8} xl={6} style={{textAlign:"center",padding:"15px"}}>
                <Space align="center">
                    <Row>
                        <Col span={24}>
                            <Avatar style={{marginBottom:"30px"}} size={100}>NDESTEK</Avatar>
                        </Col>
                        <Col span={24}>
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your Username!' }]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your Password!' }]}
                                >
                                    <Input
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>

                                <Form.Item>
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>

                                    <a className="login-form-forgot" href="">
                                        Forgot password
                                    </a>
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </Space>
            </Col>
            <Col xs={24} sm={24} md={16} lg={16} xl={18} className={"mobileHidden"}>
                <Slider></Slider>
            </Col>
        </Row>
    </>
    )
}

export default Login