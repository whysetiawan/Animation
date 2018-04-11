import { StackNavigator } from "react-navigation";
import Greetings from '../../src/Index';
import Main from '../../src/Main';
import tabNav from './tabNav';
import Maps from "../../src/Maps";

export default MainNavigation = StackNavigator({
  Greetings: {
    screen: Greetings
  },
  Main: {
    screen: tabNav,
    navigationOptions: {
      header: null
    }
  },
  Maps: {
    screen: Maps
  }
}, {
  headerMode: 'none',
  initialRouteName: 'Greetings'  
})