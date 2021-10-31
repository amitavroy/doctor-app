import { InertiaLink } from '@inertiajs/inertia-react';
import { Button, Popconfirm, Space } from 'antd';
import React from 'react';
import route from 'ziggy-js';

const appointmentTableCols = (props: Array<any>) => {
  const cols = [
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
          href={route('patients.view', { patient: record.patient.id })}
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
  if (route().current() != 'doctor.dashboard') {
    cols.push({
      title: 'Actions',
      key: 'actions',
      render: (key: any, value: any) => (
        <Space align="center">
          <Button type="primary" size="small">
            <Popconfirm
              title="Confirm visit?"
              onConfirm={() => props[0](value)}
            >
              Confirm
            </Popconfirm>
          </Button>
          <Button danger type="ghost" size="small">
            Cancel
          </Button>
        </Space>
      ),
    });
  }
  if (route().current() == 'doctor.dashboard') {
    cols.push({
      title: 'Actions',
      key: 'actions',
      render: (key: any, value: any) => (
        <Space align="center">
          <Button type="primary" size="small">
            <InertiaLink
              href={route('visit.details', { appointment: value.id })}
            >
              View
            </InertiaLink>
          </Button>
        </Space>
      ),
    });
  }
  return cols;
};

export default appointmentTableCols;
