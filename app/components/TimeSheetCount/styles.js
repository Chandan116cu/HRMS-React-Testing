import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff5c33',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:30,
      height: '30%',
      width: '100%',
    },
    progress: {
      flex: 1,
      backgroundColor:'#fff',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    cardcontainer: {
      backgroundColor: 'white',
      
    },
    textcontainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      paddingLeft:20,
      paddingTop:20,
      paddingRight:20,
    }
  });

  export default styles;