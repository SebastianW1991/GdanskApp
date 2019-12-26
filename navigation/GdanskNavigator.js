import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import MedievalScreen from '../screens/MedievalScreen';
import ContemporaryScreen from '../screens/ContemporaryScreen';

const GdanskNavigator = createStackNavigator({
  Home: HomeScreen,
  History: HistoryScreen,
  Medieval:MedievalScreen,
  Contemporary:ContemporaryScreen,
});

export default createAppContainer(GdanskNavigator);
