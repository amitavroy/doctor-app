import { Inertia } from '@inertiajs/inertia';
import { Col, Divider, Form, Row } from 'antd';
import React from 'react';
import route from 'ziggy-js';

import Template from '../components/Template';
import UserAddForm from '../forms/UserAddForm';

const AddUser = () => {
  const [userAddForm] = Form.useForm();
  const handleFormSubmit = (value: any) => {
    Inertia.post(route('user.save'), value);
  };
  return (
    <Template>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <Divider orientation="left">Add user</Divider>
        <Row>
          <Col flex="auto">
            <UserAddForm form={userAddForm} onFinish={handleFormSubmit} />
          </Col>
        </Row>
      </div>
    </Template>
  );
};

export default AddUser;
