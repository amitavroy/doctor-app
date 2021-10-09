import IPaginate from './IPaginate';
import IAppointment from './models/IAppointment';

interface IPaginateAppointment extends IPaginate {
  data: Array<IAppointment>;
}
export default IPaginateAppointment;
