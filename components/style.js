import { StyleSheet, Dimensions } from "react-native";

const casual = 'JandaEverydayCasual';
export const screenHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 24,
      textAlign: 'center',
      margin: 10,
      fontFamily: casual
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      fontFamily: casual,
      fontSize: 16
    },
    normalFont: {
      color: '#333333',
      marginVertical: '1%',
      fontSize: 14,
    },
    normalContainer: {
      flex: 1
    },
    collapsibleContainer: {
      height: screenHeight * 0.08,
      width:'100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: '3%'
    },
    spacebetweenContainer: {
      marginTop:'0.5%',
      flexDirection: 'row',
      width:'100%',
      justifyContent: 'space-between',
    }
  });
  