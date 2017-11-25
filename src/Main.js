import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation'
import {registerScreens} from './Screen';

registerScreens();

const navigatorStyle = {
  navBarHidden: true,
  statusBarHidden: true,
  statusBarColor: 'white',
  statusBarTextColorScheme: 'blue',
	navigationBarColor: 'black',
	navBarBackgroundColor: '#0a0a0a',
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	tabBarButtonColor: 'red',
	tabBarSelectedButtonColor: 'red',
	tabBarBackgroundColor: 'white',
	topBarElevationShadowEnabled: false,
	navBarHideOnScroll: true,
	tabBarHidden: false,
	drawUnderTabBar: true
};

Navigation.startSingleScreenApp({
  screen: {
    screen: 'LOGIN.Welcome', // unique ID registered with Navigation.registerScreen
    title: 'Home', // title of the screen as appears in the nav bar (optional)
    navigatorStyle:navigatorStyle, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    passProps: {},
  },
});

// Navigation.startTabBasedApp({
//
//   tabs: [
//     {
//       label: 'home', // tab label as appears under the icon in iOS (optional)
//       screen: 'LOGIN.Home', // unique ID registered with Navigation.registerScreen
//       icon: require('./image/button_terms.png'),
//       title: 'Home', // title of the screen as appears in the nav bar (optional)
//     },
//     {
//       label: 'CounselorDashboard',
//       screen: 'LOGIN.CounselorDashboard',
//       icon: require('./image/button_terms.png'),
//       title: 'CounselorDashboard'
//     },
//     {
//       label: 'Patient',
//       screen: 'LOGIN.Patient',
//       icon: require('./image/button_privacy.png'),
//       title: 'Patient'
//     },
//     {
//       label: 'IdmEnrollment',
//       screen: 'LOGIN.IdmEnrollment',
//       icon: require('./image/button_privacy.png'),
//       title: 'IdmEnrollment'
//     },
//     {
//       label: 'OnTherapy',
//       screen: 'LOGIN.OnTherapy',
//       icon: require('./image/button_privacy.png'),
//       title: 'OnTherapy'
//     },
//     {
//       label: 'Reports',
//       screen: 'LOGIN.Reports',
//       icon: require('./image/button_privacy.png'),
//       title: 'Reports'
//     }
//   ],
//   // drawer: {
//   //     left: {
//   //       screen: 'Test.Screen2'
//   //     }
//   //   }
// });
