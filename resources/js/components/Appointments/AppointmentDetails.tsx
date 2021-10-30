import { Collapse } from 'antd';
import React from 'react';
import IAppointment from '../../interfaces/models/IAppointment';

const { Panel } = Collapse;

interface Props {
  appointments: Array<IAppointment> | null;
}

const AppointmentDetails: React.FC<Props> = ({ appointments }) => {
  return (
    <div>
      <Collapse defaultActiveKey={['1']} onChange={() => {}}>
        {appointments &&
          appointments.map((appointment) => {
            return (
              <Panel
                header={`Visited on ${appointment.date}`}
                key={appointment.id}
              >
                <p>
                  <strong>Problems:</strong>
                </p>
                <p>{appointment.visit?.problems}</p>
                <hr />
                <p>
                  <strong>Prescription:</strong>
                </p>
                <p>{appointment.visit?.prescription}</p>
              </Panel>
            );
          })}
      </Collapse>
    </div>
  );
};

export default AppointmentDetails;
