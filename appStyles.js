import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#282c34',
      alignItems: 'center',
      justifyContent: 'center',
    },
    largeHeading: {
        fontSize: 30,
        fontStyle: 'italic'
      },
    lightGolden: {
        color: 'rgb(232, 210, 174)'
    },
    DarkGolden: {
        color: '#A57548'
    },
    golden: {
        color: 'rgb(215, 178, 157)'
    },
    dashContainer: {
        flex:1, 
        backgroundColor: '#282c34',
        alignItems: 'start',
        justifyContent: 'start',
      },
      inputField: {
        height: 40,
        width: 200,
        backgroundColor: '#ededed',
        paddingHorizontal:20,
        marginVertical: 10
      },
      formContainer: {
        display: "flex",
        alignSelf: "center",
        paddingVertical: 100,
      }
});

export default styles;