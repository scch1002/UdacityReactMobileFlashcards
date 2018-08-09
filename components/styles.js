import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    button: {
        borderRadius: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        margin: 5,
        padding: 20,
        alignItems: 'center'
    },
    textInput: {
      height: 40, 
      borderColor: 'black', 
      borderWidth: 1, 
      margin: 5, 
      fontSize: 20
    },
    label: { 
      margin: 10, 
      fontWeight: 'bold', 
      fontSize: 35 
    },
    mediumLabel: {
      margin: 10, 
      fontWeight: 'bold', 
      fontSize: 25
    },
    smallLabel: { 
      margin: 10, 
      fontWeight: 'bold', 
      fontSize: 20
    }
  });
  