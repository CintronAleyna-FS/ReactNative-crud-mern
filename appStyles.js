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
      },
      btn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 22,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'rgb(215, 178, 157)',
      },
      padding: {
        paddingVertical: 2,
        paddingHorizontal: 4
      },
      margin: {
        marginHorizontal: 4,
        marginVertical: 4
      }

});

export default styles;