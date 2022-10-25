import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from "react-native";
import Settings from '../components/settings';
import Recherche from '../components/recherche';
import Site from '../components/site';
import Ionicons from "@expo/vector-icons/Ionicons";


const tab = createBottomTabNavigator();



export default function Nav() {
  return (
   
      <tab.Navigator
        screenOptions=
        {({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name == "Recherche") {
              iconName = "search-outline";
              
             
            } else if (route.name == "Settings") {
              iconName = "settings-outline";
            }

            if (route.name == "Site") {
              iconName = "search-outline";
              
             
            }
            
            return <Ionicons name={iconName} size={25} color="black" />;
          },

          tabBarActiveTintColor: 'red',
		      tabBarInactiveTintColor: 'green',
        })}
        >
       <tab.Screen name="Recherche" component={Recherche} /> 
       <tab.Screen name="Site" component={Site} />
        <tab.Screen name="Settings" component={Settings} />
     
      </tab.Navigator>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

















// const Tab = createBottomTabNavigator();

// export default function Navigation () {
//     return (  
//         <Tab.Navigator>
//             <Tab.Screen 
//                 name={'Recherche'} 
//                 component={Recherche}
//                 options={{
//                     tabBarIcon: () => {<AntDesign name="search1" size={24} color="black" />},
//                 }}/>
//             <Tab.Screen 
//                 name={'Site'} 
//                 component={Site} 
//                 initialParams={{}}
//                 options={{
//                     tabBarIcon: () => {<MaterialIcons name="preview" size={24} color="black" />}
//                 }}/>
//             <Tab.Screen name={'Settings'} 
//                 component={Settings}
//                 options={{
//                     tabBarIcon: () => {<AntDesign name="Settings" size={24} color="black" />}
//                 }}
//                 />
//         </Tab.Navigator>
//     );
// }
