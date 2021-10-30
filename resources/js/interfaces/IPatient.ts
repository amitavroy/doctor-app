import IAppointment from './models/IAppointment';

interface IPatient {
  id: number;
  patient_id: number;
  name: string;
  phone_number: string;
  location: string;
  year_of_birth: string;
  weight: number;
  visit_count: number;
  last_visit: Date;
  appointments?: Array<IAppointment>;
}

export default IPatient;
