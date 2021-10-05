import IPatient from '../IPatient';

interface IAppointment {
  patient_id: number;
  location_id: number;
  date: Date;
  time: string;
  patient: IPatient;
}
export default IAppointment;
