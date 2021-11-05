import { BookOutlined, StarOutlined } from '@ant-design/icons';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Button, Col, Divider, Form, Input, List, Row, Space } from 'antd';
import React, { useEffect } from 'react';
import route from 'ziggy-js';

import Template from '../components/Template';
import PatientAddForm from '../forms/PatientAddForm';
import IPatient from '../interfaces/IPatient';

interface Props {
  patients: Array<IPatient> | null;
  phone_number: number | null;
}

const AppointmentAdd: React.FC<Props> = ({ patients, phone_number }) => {
  const [formSearch] = Form.useForm();
  const [formPatientAdd] = Form.useForm();
  const onFinishPatientAdd = (values: any) => {
    values.destination = 'book';
    Inertia.post(route('patients.save'), values);
    formPatientAdd.resetFields();
  };
  const onFinishSearch = (values: any) => {
    Inertia.get(
      route('appointments.add', { phone_number: values.phone_number })
    );
  };
  useEffect(() => {
    formSearch.setFieldsValue({ phone_number });
  }, []);
  return (
    <Template>
      <Row>
        <Col span={11}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Divider orientation="left">Search by number</Divider>
            <Row>
              <Col span={24}>
                <Form
                  form={formSearch}
                  name="basic"
                  initialValues={{ remember: true }}
                  autoComplete="off"
                  onFinish={onFinishSearch}
                >
                  <Form.Item
                    label="Phone number"
                    name="phone_number"
                    rules={[
                      { required: true, message: 'Enter the phone number' },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item {...tailLayout}>
                    <Space size={12}>
                      <Button type="primary" htmlType="submit">
                        Search
                      </Button>
                    </Space>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
            {patients &&
              patients.length > 0 &&
              patients.map((patient: IPatient) => {
                return (
                  <Row>
                    <Col span={24}>
                      <List size="default" itemLayout="vertical">
                        <List.Item
                          key={patient.id}
                          actions={[
                            <IconText
                              icon={StarOutlined}
                              text="Book appointment"
                              link={route('appointments.book', {
                                patient: patient.id,
                              })}
                              key="list-vertical-app-o"
                            />,
                            <IconText
                              icon={BookOutlined}
                              text="View history"
                              link={route('patients.view', {
                                patient: patient.id,
                              })}
                              key="list-vertical-history-o"
                            />,
                          ]}
                        >
                          <List.Item.Meta
                            title={patient.name}
                            description={`Location: ${patient.location}`}
                          />
                          Patient ID: {patient.patient_id}
                          <br />
                          Total visits: {patient.visit_count}
                          <br />
                          Last visit: {patient.last_visit}
                        </List.Item>
                      </List>
                    </Col>
                  </Row>
                );
              })}
          </div>
        </Col>
        <Col span={12} offset={1}>
          <Row>
            <Col span={24}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <Divider orientation="left">Add patient</Divider>
                <PatientAddForm
                  form={formPatientAdd}
                  onFinish={onFinishPatientAdd}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Template>
  );
};

export default AppointmentAdd;

const IconText = ({ icon, text, link }: any) => (
  <Space>
    {React.createElement(icon)}
    <InertiaLink href={link}>{text}</InertiaLink>
  </Space>
);

const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};
