import { StackNavigator } from "react-navigation";
import Greetings from '../../src/Index';
import Main from '../../src/Main';

export default MainNavigation = StackNavigator({
  Greetings: {
    screen: Greetings
  },
  Main: {
    screen: Main
  }
}, {
  headerMode: 'none'
})