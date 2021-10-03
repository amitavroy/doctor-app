import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Inertia, Method } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Col, Divider, Space, Table, TablePaginationConfig } from 'antd';
import React from 'react';
import route from 'ziggy-js';

import Template from '../components/Template';
import IPaginatePatient from '../interfaces/models/IPaginatePatient';

interface Props {
  patients: IPaginatePatient;
}

const Patients: React.FC<Props> = ({ patients }) => {
  const tableCols = [
    { title: 'Patient ID', dataIndex: 'patient_id', key: 'patient_id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Phone number', dataIndex: 'phone_number', key: 'phone_number' },
    { title: 'Visits', dataIndex: 'visit_count', key: 'visit_count' },
    { title: 'Last visit', dataIndex: 'last_visit', key: 'last_visit' },
    {
      title: 'Actions',
      key: 'id',
      render: (key: any, record: any) => (
        <Space size="middle">
          <InertiaLink href={route('patients.add')}>
            <EditOutlined />
          </InertiaLink>
          <DeleteOutlined />
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
  return (
    <Template>
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
