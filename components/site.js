import React, { useEffect, useState } from 'react';
import { Button, View, StyleSheet,TouchableOpacity,Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

export default function App({route}) {
  const [isUrlDefined, setIsUrlDefined] = useState(false)
  const {url} = route.params

  const _handlePressButtonAsync = async () => {
   await WebBrowser.openBrowserAsync(`${url}`);
  };

  useEffect(()=> {
    if (url != undefined) {
        setIsUrlDefined(true)
        console.log('if');
      } else {
        setIsUrlDefined(false)
        console.log('else');
      }
  }, [])

  return (
    <View style={{flex:1}}>
        <WebView 
        style={styles.container}
        source={{ uri: `${url}` }}
        />
       

        <TouchableOpacity
          onPress={_handlePressButtonAsync}
          style={{
            backgroundColor: "orange",
            padding: 20,
            borderRadius: 20,
            marginVertical: 20,
            marginHorizontal: 50,
          }}
        >
          <Text
            style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            Navigateur
          </Text>
          </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
