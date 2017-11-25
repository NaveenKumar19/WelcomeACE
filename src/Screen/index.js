import {Navigation} from 'react-native-navigation';

import CounselorDashboard from './CounselorDashboard.js';
import Home from './Home.js';
import Patient from './Patient.js';
import OnTherapy from './OnTherapy.js';
import IdmEnrollment from './IdmEnrollment.js';
import Reports from './Reports.js';
import Welcome from './Welcome.js';
import Login from './Login.js';

export function registerScreens() {
  Navigation.registerComponent('LOGIN.Home', () => Home);
  Navigation.registerComponent('LOGIN.Welcome',()=>Welcome);
  Navigation.registerComponent('LOGIN.Login',()=>Login);
  Navigation.registerComponent('LOGIN.Patient', () => Patient);
  Navigation.registerComponent('LOGIN.OnTherapy', () =>OnTherapy);
  Navigation.registerComponent('LOGIN.Reports', () =>Reports);


}
