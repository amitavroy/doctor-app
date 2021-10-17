import IPatient from '../IPatient';
import IAppointment from './IAppointment';

interface IVisit {
  id: number;
  patient_id: number;
  appointment_id: number;
  problems: string;
  prescription: string;
  patient: IPatient;
  appointment: IAppointment;
}
export default IVisit;
