import { InertiaLink } from '@inertiajs/inertia-react';
import { Button, Col, Divider, Row } from 'antd';
import React from 'react';
import route from 'ziggy-js';

import Template from '../components/Template';

const Home = () => {
  return (
    <Template>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <Divider orientation="left">Dashboard</Divider>
        <Row>
          <Col flex="auto">
            <InertiaLink href={route('appointments.add')}>
              <Button type="primary">Add appointment</Button>
            </InertiaLink>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>This is where appointment list for today will come.</p>
          </Col>
        </Row>
      </div>
    </Template>
  );
};

export default Home;
