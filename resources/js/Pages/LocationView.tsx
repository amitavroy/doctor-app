import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
} from 'antd';
import React, { useEffect, useState } from 'react';
import route from 'ziggy-js';

import Template from '../components/Template';

const { Option } = Select;

interface Props {
  location: any;
}

const LocationsAdd: React.FC<Props> = ({ location }) => {
  useEffect(() => {
    form.setFieldsValue({
      type: location.type,
      name: location.name,
      short_address: location.short_address,
    });
  }, []);
  const [form] = Form.useForm();
  const [showModal, setModal] = useState(false);
  const tailLayout = {
    wrapperCol: { offset: 4, span: 16 },
  };
  const onLocationTypeChange = (value: string) => {
    form.setFieldsValue({ type: value });
  };
  const onFinish = (values: any) => {
    values.id = location.id;
    Inertia.post(route('locations.update'), values);
    form.resetFields();
  };
  const handleDelete = (event: React.MouseEvent) => {
    event.preventDefault();
    setModal(true);
  };
  const deleteLocation = () => {
    Inertia.post(route('locations.delete', { id: location.id }));
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
                <Space size={18}>
                  <Button type="primary" htmlType="submit">
                    Save
                  </Button>
                  <InertiaLink href={route('locations')}>Back</InertiaLink>
                  <a href="#" onClick={handleDelete}>
                    Delete
                  </a>
                </Space>
              </Form.Item>
            </Form>
            <Modal
              title="Delete location?"
              visible={showModal}
              onCancel={() => setModal(false)}
              onOk={deleteLocation}
              okText="Delete"
              cancelText="Cancel"
            >
              Once you delete a location, you will not be able to get it back.
            </Modal>
          </Col>
        </Row>
      </div>
    </Template>
  );
};

export default LocationsAdd;
