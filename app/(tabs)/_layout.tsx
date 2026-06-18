import { PRIMARY, SURFACE, TEXT_SECONDARY } from "@/constants/colors";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs screenOptions={
      {
        headerShown:false,
        tabBarActiveTintColor:PRIMARY,
        tabBarInactiveTintColor: TEXT_SECONDARY,
        tabBarStyle:{
          paddingBottom:10,
          paddingTop: 18,
          height:100,
          borderTopRightRadius:20,
          borderTopLeftRadius:20,
          elevation: 2,
          backgroundColor: SURFACE
        }
      }
    }
    >
        <Tabs.Screen name="home" options={{
          title:"Home",
          tabBarIcon:({color, size})=><MaterialIcons name="home-filled" size={size} color={color} />
        }}/>

        <Tabs.Screen name="createRoutine" options={{
          title:"Add Routine",
          tabBarIcon:({color, size})=><FontAwesome6 name="plus" size={size} color={color} />
        }}/>

        <Tabs.Screen name="settings" options={{
          title:"Settings",
          tabBarIcon:({color, size})=><SimpleLineIcons name="settings" size={size} color={color} />
        }}/>

    </Tabs>
  )
}
