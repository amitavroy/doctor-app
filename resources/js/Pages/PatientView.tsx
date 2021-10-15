import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Button, Col, Divider, Form, Input, Row, Space } from 'antd';
import React, { useEffect } from 'react';
import route from 'ziggy-js';

import Template from '../components/Template';
import PatientAddForm from '../forms/PatientAddForm';
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
            <PatientAddForm form={form} onFinish={onFinish} />
          </Col>
        </Row>
      </div>
    </Template>
  );
};

export default PatientView;
