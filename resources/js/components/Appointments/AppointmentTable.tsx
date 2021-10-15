import { Button, Popconfirm, Space, Table, TablePaginationConfig } from 'antd';
import React from 'react';
import IPaginateAppointments from '../../interfaces/IPaginateAppointments';
import { InertiaLink } from '@inertiajs/inertia-react';
import route from 'ziggy-js';
import { Inertia } from '@inertiajs/inertia';

interface Props {
  appointments: IPaginateAppointments;
  tableDataChange: (pagination: TablePaginationConfig) => void;
}

const AppointmentTable: React.FC<Props> = ({
  appointments,
  tableDataChange,
}) => {
  const appointmentTableCols = [
    {
      title: 'ID',
      key: 'patient.patient_id',
      render: (key: any, record: any) => (
        <span>{record.patient.patient_id}</span>
      ),
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
    {
      title: 'Actions',
      key: 'actions',
      render: (key: any, value: any) => (
        <Space align="center">
          <Button type="primary" size="small">
            <Popconfirm
              title="Confirm visit?"
              onConfirm={() => handleConfirmAppointment(value)}
            >
              Confirm
            </Popconfirm>
          </Button>
          <Button danger type="ghost" size="small">
            Cancel
          </Button>
        </Space>
      ),
    },
  ];
  const handleConfirmAppointment = (record: any) => {
    Inertia.post(route('visit.confirm'), record);
  };
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
