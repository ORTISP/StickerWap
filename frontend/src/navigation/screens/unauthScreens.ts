import IScreens from './IScreens';
import { SIGNIN, SIGNUP } from 'utils/route';
import SignIn from 'screens/SignIn';
import SignUp from 'screens/SignUp';

export interface IUnauthScreens extends IScreens {
  title: string;
}

const unauthScreens: IScreens[] = [
  {
    name: SIGNIN,
    component: SignIn,
  },
  {
    name: SIGNUP,
    component: SignUp,
  },
];

export default unauthScreens;
