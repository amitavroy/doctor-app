import { Inertia } from '@inertiajs/inertia';
import { Col, Divider, Form, Row } from 'antd';
import React from 'react';
import route from 'ziggy-js';

import Template from '../components/Template';
import PatientAddForm from '../forms/PatientAddForm';

const PatientsAdd: React.FC = () => {
  const [form] = Form.useForm();
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
            <PatientAddForm form={form} onFinish={onFinish} />
          </Col>
        </Row>
      </div>
    </Template>
  );
};

export default PatientsAdd;
