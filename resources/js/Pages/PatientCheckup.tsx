import { Inertia } from '@inertiajs/inertia';
import { Button, Col, Divider, Form, Input, Row, Space } from 'antd';
import React from 'react';
import route from 'ziggy-js';
import AppointmentDetails from '../components/Appointments/AppointmentDetails';

import Template from '../components/Template';
import IBreadcrumb from '../interfaces/IBreadcrumb';
import IAppointment from '../interfaces/models/IAppointment';

interface Props {
  appointment: IAppointment;
  historicalAppointments: Array<IAppointment>;
}

const PatientCheckup: React.FC<Props> = ({
  appointment,
  historicalAppointments,
}) => {
  const [patientCheck] = Form.useForm();
  const handlePatientCheckFormSubmit = (values: any) => {
    values.visit_id = appointment.visit?.id;
    Inertia.post(route('visit.update'), values);
  };
  return (
    <Template breadcrumbs={breadcrumb}>
      <Row>
        <Col span="8">
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <h1>Patient: {appointment.patient.name}</h1>
            <br />
            <strong>Age:</strong> {appointment.patient.year_of_birth}
            <br />
            <strong>Weight:</strong> {appointment.patient.weight}
            <br />
            <strong>Location:</strong> {appointment.patient.location}
            <br />
            <strong>Last visit:</strong> {appointment.patient.last_visit}
          </div>
        </Col>
        <Col span="14" offset="2">
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Form
              form={patientCheck}
              name="patient_check"
              initialValues={{
                problems: appointment.visit?.problems,
                prescription: appointment.visit?.prescription,
              }}
              autoComplete="false"
              onFinish={handlePatientCheckFormSubmit}
            >
              <Form.Item
                label="Problems"
                name="problems"
                rules={[{ required: true, message: 'Fill in details' }]}
              >
                <Input.TextArea />
              </Form.Item>

              <Form.Item
                label="Prescription"
                name="prescription"
                rules={[{ required: true, message: 'Fill in details' }]}
              >
                <Input.TextArea />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Space size={12}>
                  <Button type="primary" htmlType="submit">
                    Save
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360, marginTop: '10px' }}
      >
        <Row>
          <Col span={24}>
            <Divider orientation="left">Previous appointments</Divider>
            <AppointmentDetails appointments={historicalAppointments} />
          </Col>
        </Row>
      </div>
    </Template>
  );
};

export default PatientCheckup;

const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

const breadcrumb: Array<IBreadcrumb> = [
  { name: 'Home', link: route('home') },
  { name: 'My Dashboard', link: route('doctor.dashboard') },
  { name: 'Patient details', link: '' },
];
