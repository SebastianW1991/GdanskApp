import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';


const GdanskNavigator = createStackNavigator({
  Home: HomeScreen,
  History: HistoryScreen,
});

export default createAppContainer(GdanskNavigator);
