import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging6072Navigator from '../features/Messaging6072/navigator';
import CalendarView6071Navigator from '../features/CalendarView6071/navigator';
import EmailAuth6070Navigator from '../features/EmailAuth6070/navigator';
import BlankScreen46069Navigator from '../features/BlankScreen46069/navigator';
import EmailAuth6067Navigator from '../features/EmailAuth6067/navigator';
import CalendarView6066Navigator from '../features/CalendarView6066/navigator';
import Messaging6065Navigator from '../features/Messaging6065/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Messaging6072: { screen: Messaging6072Navigator },
CalendarView6071: { screen: CalendarView6071Navigator },
EmailAuth6070: { screen: EmailAuth6070Navigator },
BlankScreen46069: { screen: BlankScreen46069Navigator },
EmailAuth6067: { screen: EmailAuth6067Navigator },
CalendarView6066: { screen: CalendarView6066Navigator },
Messaging6065: { screen: Messaging6065Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
