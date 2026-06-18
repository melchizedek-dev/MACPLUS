import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const home = () => {
  return (
    <View style={{flex:1, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", backgroundColor:"#b11414cc"}}>
      <Text>home</Text>
      <Link href={"/home"}>
        <Text>Go to Dashboard</Text>
      </Link>
    </View>
  )
}

export default home