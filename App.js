import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ShowResultsScreen from './src/screens/ShowResultsScreen';
import ShowImage from './src/components/ShowImage';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ShowResult: ShowResultsScreen,
    ShowImage: ShowImage
  },
    {
      initialRouteName: 'Search',
      defaultNavigationOptions: {
        title: 'Business Search'
    }
  }
);

export default createAppContainer(navigator);