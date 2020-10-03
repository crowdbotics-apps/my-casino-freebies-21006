import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList123871Navigator from '../features/ArticleList123871/navigator';
import ArticleList123870Navigator from '../features/ArticleList123870/navigator';
import ArticleList123869Navigator from '../features/ArticleList123869/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList123871: { screen: ArticleList123871Navigator },
ArticleList123870: { screen: ArticleList123870Navigator },
ArticleList123869: { screen: ArticleList123869Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
