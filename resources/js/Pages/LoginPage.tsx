import { Inertia } from '@inertiajs/inertia';
import { Breadcrumb, Col, Layout, Row, Form } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import React from 'react';
import route from 'ziggy-js';
import LoginForm from '../forms/LoginForm';

const LoginPage = () => {
  const handleLogin = (values: { email: string; password: string }) => {
    Inertia.post(route('do.login'), {
      email: values.email,
      password: values.password,
    });
  };
  return (
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 360,
            width: '50%',
            margin: '0px auto',
          }}
        >
          <Row justify="center">
            <Col flex="auto" span="8">
              <h1>Login to Doctor app</h1>
              <LoginForm onFinish={handleLogin} />
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default LoginPage;

const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};
