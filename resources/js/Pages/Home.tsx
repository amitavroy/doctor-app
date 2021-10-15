import { InertiaLink } from '@inertiajs/inertia-react';
import { Button, Col, Divider, Row, TablePaginationConfig } from 'antd';
import React from 'react';
import route from 'ziggy-js';

import Template from '../components/Template';
import AppointmentTable from '../components/Appointments/AppointmentTable';
import IPaginateAppointment from '../interfaces/IPaginateAppointments';
import { Inertia, Method } from '@inertiajs/inertia';

interface Props {
  appointments: IPaginateAppointment;
}

const Home: React.FC<Props> = ({ appointments }) => {
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
        <Divider orientation="left">Dashboard</Divider>
        <Row>
          <Col flex="auto">
            <InertiaLink href={route('appointments.add')}>
              <Button type="primary">Add appointment</Button>
            </InertiaLink>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <AppointmentTable
              appointments={appointments}
              tableDataChange={handleTableDataChange}
            />
          </Col>
        </Row>
      </div>
    </Template>
  );
};

export default Home;
