import { InertiaLink } from '@inertiajs/inertia-react';
import { Breadcrumb, Button, Col, Layout, Row } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import React from 'react';
import route from 'ziggy-js';

import Template from '../components/Template';

const Login = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Row>
              <Col flex="auto" span="8">
                <p>Login form will come here</p>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Login;
