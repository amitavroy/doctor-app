import { Inertia } from '@inertiajs/inertia';
import { Table, TablePaginationConfig } from 'antd';
import React, { useEffect } from 'react';
import route from 'ziggy-js';

import IPaginateAppointments from '../../interfaces/IPaginateAppointments';
import appointmentTableCols from './tableColumns';

interface Props {
  appointments: IPaginateAppointments;
  tableDataChange: (pagination: TablePaginationConfig) => void;
}

const AppointmentTable: React.FC<Props> = ({
  appointments,
  tableDataChange,
}) => {
  const handleConfirmAppointment = (record: any) => {
    Inertia.post(route('visit.confirm'), record);
  };
  const tableCols = [...appointmentTableCols([handleConfirmAppointment])];
  return (
    <Table
      rowKey={'id'}
      dataSource={appointments.data}
      columns={tableCols}
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
