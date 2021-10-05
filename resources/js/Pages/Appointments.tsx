import { Inertia, Method } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Button, Col, Divider, Row, Table, TablePaginationConfig } from 'antd';
import React from 'react';
import route from 'ziggy-js';

import Template from '../components/Template';
import IPaginateAppointment from '../interfaces/IPaginateAppointments';

interface Props {
  appointments: IPaginateAppointment;
}

const Appointments: React.FC<Props> = ({ appointments }) => {
  const handleTableDataChange = (pagination: TablePaginationConfig) => {
    const url = route('appointments.list') + `?page=${pagination.current}`;
    Inertia.visit(url, { method: Method.GET });
  };
  return (
    <Template>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <Divider orientation="left">Appointments</Divider>
        {/* <Col>
          <Row justify="end">
            <InertiaLink href={route('locations.add')}>
              <Button type="primary">Add location</Button>
            </InertiaLink>
          </Row>
        </Col> */}
        <Col>
          <Table
            rowKey={'id'}
            dataSource={appointments.data}
            columns={appointmentTableCols}
            onChange={handleTableDataChange}
            pagination={{
              current: appointments.current_page,
              defaultCurrent: 1,
              pageSize: appointments.per_page,
              total: appointments.total,
              position: ['bottomLeft'],
              showSizeChanger: false,
            }}
          />
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
    render: (key: any, record: any) => <span>{record.patient.name}</span>,
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
