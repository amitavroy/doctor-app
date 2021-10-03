import IPaginate from '../IPaginate';
import IPatient from '../IPatient';

interface IPaginatePatient extends IPaginate {
  data: Array<IPatient>;
}
export default IPaginatePatient;
