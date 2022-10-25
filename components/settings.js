import {StyleSheet, View, Text } from "react-native";

function Settings (){
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Hello</Text>
          
        </View>
      );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainText:{
        flex:10,
        fontSize:20,
        margin:20

    },
    
  });


export default Settings;