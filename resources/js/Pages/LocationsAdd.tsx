import React from 'react';
import { Row, Col, Divider, List, Form, Input, Button, Select } from 'antd';

const { Option } = Select;

import Template from '../components/Template';
import { Inertia } from '@inertiajs/inertia';
import route from 'ziggy-js';

interface Props {
  locations: Array<any>;
}

const LocationsAdd: React.FC<Props> = ({ locations }) => {
  const [form] = Form.useForm();
  const tailLayout = {
    wrapperCol: { offset: 4, span: 16 },
  };
  const onLocationTypeChange = (value: string) => {
    form.setFieldsValue({ type: value });
  };
  const onFinish = (values: any) => {
    console.log(values);
    Inertia.post(route('locations.save'), values);
    // form.resetFields();
  };
  return (
    <Template>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <Divider orientation="left">Add location</Divider>
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
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Enter the location name' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Short address"
                name="short_address"
                rules={[
                  {
                    required: true,
                    message: 'Enter the short address',
                    max: 250,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="type"
                label="Location type"
                rules={[{ required: true }]}
              >
                <Select
                  placeholder="Select location type"
                  onChange={onLocationTypeChange}
                  allowClear
                >
                  <Option value="HOSPITAL">Hospital</Option>
                  <Option value="CLINIC">Clinic</Option>
                </Select>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </Template>
  );
};

export default LocationsAdd;
