import { BACKGROUND } from "@/constants/colors";
import { AppContextProvider } from "@/context/AppContext";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <AppContextProvider>
      <SafeAreaView style={{flex:1, backgroundColor:BACKGROUND}}>
        <Stack screenOptions={{headerShown:false}}/>
      </SafeAreaView>
    </AppContextProvider>
  )
}
