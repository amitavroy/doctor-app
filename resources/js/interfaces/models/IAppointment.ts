import IPatient from '../IPatient';
import IVisit from './IVisit';

interface IAppointment {
  id: number;
  patient_id: number;
  location_id: number;
  date: Date;
  time: string;
  patient: IPatient;
  visit?: IVisit;
}
export default IAppointment;
