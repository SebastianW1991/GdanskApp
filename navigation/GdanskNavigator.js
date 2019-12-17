import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import MiddleageScreen from '../screens/MiddleageScreen';


const GdanskNavigator = createStackNavigator({
  Home: HomeScreen,
  History: HistoryScreen,
  MiddleAge:MiddleageScreen
});

export default createAppContainer(GdanskNavigator);
