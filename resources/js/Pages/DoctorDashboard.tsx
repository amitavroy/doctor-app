import { Inertia, Method } from '@inertiajs/inertia';
import { Col, Divider, Row, TablePaginationConfig } from 'antd';
import React from 'react';
import route from 'ziggy-js';
import AppointmentTable from '../components/Appointments/AppointmentTable';
import Template from '../components/Template';
import IBreadcrumb from '../interfaces/IBreadcrumb';
import IPaginateAppointment from '../interfaces/IPaginateAppointments';

interface Props {
  appointments: IPaginateAppointment;
}

const DoctorDashboardPage: React.FC<Props> = ({ appointments }) => {
  const handleTableDataChange = (pagination: TablePaginationConfig) => {
    const url = route('doctor.dashboard') + `?page=${pagination.current}`;
    Inertia.visit(url, { method: Method.GET });
  };
  return (
    <Template breadcrumbs={breadcrumb}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <Divider orientation="left">My Dashboard</Divider>
        <Row>
          <Col span="24">
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

export default DoctorDashboardPage;

const breadcrumb: Array<IBreadcrumb> = [
  { name: 'Home', link: route('home') },
  { name: 'My Dashboard', link: '' },
];
