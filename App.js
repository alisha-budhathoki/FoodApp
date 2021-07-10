import { createStackNavigator, } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import SearchScreen from "./src/screens/search_screen";
import ResultsShowScreen from "./src/screens/results_show_screen";
const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShowScreen: ResultsShowScreen,
}, {
  initalRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Buisness Search',
  }
});
export default createAppContainer(navigator);