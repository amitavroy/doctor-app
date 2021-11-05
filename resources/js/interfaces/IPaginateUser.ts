import IPaginate from './IPaginate';
import IUser from './models/IUser';

interface IPaginateUser extends IPaginate {
  data: Array<IUser>;
}
export default IPaginateUser;
