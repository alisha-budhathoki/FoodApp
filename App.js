import { createStackNavigator,  } from "react-navigation-stack";
import { createAppContainer} from 'react-navigation';
import SearchScreen from "./src/screens/search_screen";
const navigator = createStackNavigator({
  Search: SearchScreen
},{
  initalRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Buisness Search',
  }
});
export default createAppContainer(navigator);