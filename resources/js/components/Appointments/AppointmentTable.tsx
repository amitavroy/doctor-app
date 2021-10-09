import { Table, TablePaginationConfig } from 'antd';
import React from 'react';
import IPaginateAppointments from '../../interfaces/IPaginateAppointments';
import { InertiaLink } from '@inertiajs/inertia-react';
import route from 'ziggy-js';

interface Props {
  appointments: IPaginateAppointments;
  tableDataChange: (pagination: TablePaginationConfig) => void;
}

const AppointmentTable: React.FC<Props> = ({
  appointments,
  tableDataChange,
}) => {
  return (
    <Table
      rowKey={'id'}
      dataSource={appointments.data}
      columns={appointmentTableCols}
      onChange={tableDataChange}
      pagination={{
        current: appointments.current_page,
        defaultCurrent: 1,
        pageSize: appointments.per_page,
        total: appointments.total,
        position: ['bottomLeft'],
        showSizeChanger: false,
      }}
    />
  );
};
export default AppointmentTable;

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
