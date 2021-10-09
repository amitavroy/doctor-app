import { Inertia, Method } from '@inertiajs/inertia';
import { Col, Divider, TablePaginationConfig } from 'antd';
import React from 'react';
import route from 'ziggy-js';

import Template from '../components/Template';
import IPaginateAppointment from '../interfaces/IPaginateAppointments';
import AppointmentTable from '../components/Appointments/AppointmentTable';

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
          <AppointmentTable
            appointments={appointments}
            tableDataChange={handleTableDataChange}
          />
        </Col>
      </div>
    </Template>
  );
};

export default Appointments;
