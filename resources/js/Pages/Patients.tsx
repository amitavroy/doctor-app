import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Inertia, Method } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';
import {
  Col,
  Divider,
  Popconfirm,
  Space,
  Table,
  TablePaginationConfig,
} from 'antd';
import React from 'react';
import route from 'ziggy-js';

import Template from '../components/Template';
import IBreadcrumb from '../interfaces/IBreadcrumb';
import IPaginatePatient from '../interfaces/models/IPaginatePatient';

interface Props {
  patients: IPaginatePatient;
}

const Patients: React.FC<Props> = ({ patients }) => {
  const tableCols = [
    { title: 'Patient ID', dataIndex: 'patient_id', key: 'patient_id' },
    {
      title: 'Name',
      dataIndex: 'name',
      render: (key: any, record: any) => (
        <InertiaLink href={route('patients.view', { patient: record.id })}>
          {record.name}
        </InertiaLink>
      ),
    },
    { title: 'Phone number', dataIndex: 'phone_number', key: 'phone_number' },
    { title: 'Visits', dataIndex: 'visit_count', key: 'visit_count' },
    { title: 'Last visit', dataIndex: 'last_visit', key: 'last_visit' },
    {
      title: 'Actions',
      key: 'id',
      render: (key: any, record: any) => (
        <Space size="middle">
          <InertiaLink href={route('patients.view', { patient: record.id })}>
            <EyeOutlined />
          </InertiaLink>
          <Popconfirm
            title="Delete Patient record?"
            onConfirm={() => deletePatient(record.id)}
          >
            <DeleteOutlined />
          </Popconfirm>
        </Space>
      ),
    },
  ];
  const handleTableDataChange = (
    pagination: TablePaginationConfig,
    filters: unknown,
    sorter: unknown
  ) => {
    const url = route('patients.list') + `?page=${pagination.current}`;
    Inertia.visit(url, { method: Method.GET });
  };
  const deletePatient = (id: number) => {
    Inertia.post(route('patients.delete', { id }));
  };
  return (
    <Template breadcrumbs={breadcrumb}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <Divider orientation="left">Patients</Divider>
        <Col>
          <Table
            rowKey={'id'}
            dataSource={patients.data}
            columns={tableCols}
            onChange={handleTableDataChange}
            pagination={{
              current: patients.current_page,
              defaultCurrent: 1,
              pageSize: patients.per_page,
              total: patients.total,
              position: ['bottomLeft'],
              showSizeChanger: false,
            }}
          />
        </Col>
      </div>
    </Template>
  );
};

export default Patients;

const breadcrumb: Array<IBreadcrumb> = [
  { name: 'Home', link: route('home') },
  { name: 'Patients', link: '' },
];
