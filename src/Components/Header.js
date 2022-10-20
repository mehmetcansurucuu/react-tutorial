import React from 'react'
import { Layout, Menu, Avatar, Row, Col } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const { Header } = Layout;


function HeaderComponent() {
  return (
    <>
    <Header>
        <Row>
            <Col span={2}>
                <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 50 }}
                icon={<AntDesignOutlined />}
                />
            </Col>
            <Col span={20}>
                <Menu
                    theme='dark'
                    mode='horizontal'
                    defaultSelectedKeys={['1']}>
                        <Menu.Item key={1}>
                            <Link to='/'>Anasayfa</Link>
                        </Menu.Item>
                        <Menu.Item key={2}>
                            <Link to='/customers'>Kullanıcılar</Link>
                        </Menu.Item>
                        <Menu.Item key={3}></Menu.Item>
                </Menu>
            </Col>
            <Col span={2}>
                <Link to="/login">Login</Link>     
            </Col>
        </Row>
    </Header>
    </>
  )
}

export default HeaderComponent