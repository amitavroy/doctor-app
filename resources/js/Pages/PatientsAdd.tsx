import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Button, Col, Divider, Form, Input, Row, Space } from 'antd';
import React from 'react';
import route from 'ziggy-js';

import Template from '../components/Template';

const PatientsAdd: React.FC = () => {
  const [form] = Form.useForm();
  const tailLayout = {
    wrapperCol: { offset: 4, span: 16 },
  };
  const onFinish = (values: any) => {
    Inertia.post(route('patients.save'), values);
    form.resetFields();
  };
  return (
    <Template>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <Divider orientation="left">Add patient</Divider>
        <Row>
          <Col span={24}>
            <Form
              form={form}
              name="basic"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}
              initialValues={{ remember: true }}
              autoComplete="off"
              onFinish={onFinish}
            >
              <Form.Item
                label="Patient name"
                name="name"
                rules={[{ required: true, message: 'Enter the patient name' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Phone number"
                name="phone_number"
                rules={[{ required: true, message: 'Enter the Phone number' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Age"
                name="age"
                rules={[{ required: true, message: 'Enter the Age' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Weight"
                name="weight"
                rules={[{ required: true, message: 'Enter the Weight' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Space size={18}>
                  <Button type="primary" htmlType="submit">
                    Save
                  </Button>
                  <InertiaLink href={route('locations')}>Back</InertiaLink>
                </Space>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </Template>
  );
};

export default PatientsAdd;
