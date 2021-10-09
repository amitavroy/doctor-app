import { Inertia } from '@inertiajs/inertia';
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Space,
} from 'antd';
import moment from 'moment';
import React, { useEffect } from 'react';
import route from 'ziggy-js';

import Template from '../components/Template';
import IPatient from '../interfaces/IPatient';

const { Option } = Select;

interface Props {
  patient: IPatient;
}

const AppointmentBook: React.FC<Props> = ({ patient }) => {
  const [formAppointmentBook] = Form.useForm();
  const onFinishSearch = (values: any) => {
    const postData = {
      patient_id: patient.id,
      date: moment(values.date).format('YYYY-MM-DD'),
      type: values.type,
    };
    Inertia.post(route('appointments.confirm'), postData);
  };
  const onLocationTypeChange = (value: string) => {
    formAppointmentBook.setFieldsValue({ type: value });
  };
  const handleDateChange = (date: any, dateString: any) => {
    formAppointmentBook.setFieldsValue({ date: date });
  };
  useEffect(() => {
    formAppointmentBook.setFieldsValue({ name: patient.name, date: moment() });
  }, []);
  return (
    <Template>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <Divider orientation="left">Book appointment</Divider>
        <Row>
          <Col span={24}>
            <Form
              form={formAppointmentBook}
              name="basic"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}
              initialValues={{ remember: true }}
              autoComplete="off"
              onFinish={onFinishSearch}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Enter the Name' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Date"
                name="date"
                rules={[{ required: true, message: 'Enter the date' }]}
              >
                <DatePicker onChange={handleDateChange} />
              </Form.Item>

              <Form.Item
                label="Visit type"
                name="type"
                rules={[{ required: true, message: 'Select visit type' }]}
              >
                <Select
                  placeholder="Select visit type"
                  onChange={onLocationTypeChange}
                  allowClear
                >
                  <Option value="Visit">Visit</Option>
                  <Option value="Follow up">Follow up</Option>
                </Select>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Space size={12}>
                  <Button type="primary" htmlType="submit">
                    Save
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </Template>
  );
};

export default AppointmentBook;

const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};
