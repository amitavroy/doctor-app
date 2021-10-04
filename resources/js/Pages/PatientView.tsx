import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Button, Col, Divider, Form, Input, Row, Space } from 'antd';
import React, { useEffect } from 'react';
import route from 'ziggy-js';

import Template from '../components/Template';
import IPatient from '../interfaces/IPatient';

interface Props {
  patient: IPatient;
}

const PatientView: React.FC<Props> = ({ patient }) => {
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      name: patient.name,
      phone_number: patient.phone_number,
      age: new Date().getFullYear() - parseInt(patient.year_of_birth),
      weight: patient.weight,
    });
  }, []);
  const tailLayout = {
    wrapperCol: { offset: 4, span: 16 },
  };
  const onFinish = (values: any) => {
    values.id = patient.id;
    Inertia.post(route('patients.update'), values);
    form.resetFields();
  };
  return (
    <Template>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <Divider orientation="left">View / Edit patient</Divider>
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
                  <InertiaLink href={route('patients.list')}>Back</InertiaLink>
                </Space>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </Template>
  );
};

export default PatientView;
