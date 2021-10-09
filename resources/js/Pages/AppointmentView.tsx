import { Inertia, Method } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Col, Divider, Row, Table, TablePaginationConfig } from 'antd';
import React from 'react';
import route from 'ziggy-js';

import Template from '../components/Template';
import IPaginateAppointment from '../interfaces/IPaginateAppointments';
import IAppointment from '../interfaces/models/IAppointment';

interface Props {
  appointment: IAppointment;
}

const Appointments: React.FC<Props> = ({ appointment }) => {
  return (
    <Template>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <Divider orientation="left">Appointment details</Divider>
        <Col>
          <Row>
            <p>Checking</p>
          </Row>
        </Col>
      </div>
    </Template>
  );
};

export default Appointments;

const appointmentTableCols = [
  {
    title: 'ID',
    key: 'patient.patient_id',
    render: (key: any, record: any) => <span>{record.patient.patient_id}</span>,
  },
  {
    title: 'Name',
    key: 'name',
    render: (key: any, record: any) => (
      <InertiaLink
        href={route('appointments.view', { appointment: record.id })}
      >
        {record.patient.name}
      </InertiaLink>
    ),
  },
  {
    title: 'Phone',
    key: 'phone',
    render: (key: any, record: any) => (
      <span>{record.patient.phone_number}</span>
    ),
  },
  {
    title: 'Date',
    key: 'date',
    dataIndex: 'date',
  },
  {
    title: 'Time',
    key: 'time',
    dataIndex: 'time',
  },
];
