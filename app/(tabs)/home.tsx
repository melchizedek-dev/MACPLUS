import { BACKGROUND, PRIMARY, PRIMARY_LIGHT, SURFACE, TEXT_PRIMARY, TEXT_SECONDARY } from '@/constants/colors';
import { FONT_SIZE_H1, FONT_SIZE_SUBTITLE, FONT_SIZE_TITLE, FONT_WEIGHT_BOLD, FONT_WEIGHT_MEDIUM, FONT_WEIGHT_REGULAR } from '@/constants/fontSizes';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ProgressChart } from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;


const data = {
  data: [0.4]
};

const chartConfig = {
  backgroundGradientFrom: SURFACE,
  backgroundGradientTo: SURFACE,
  color: (opacity = 1) => `rgb(246, 194, 95, ${opacity})`,
  strokeWidth: 1,
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

const home = () => {
  return (
    <ScrollView style={{flex:1, backgroundColor:BACKGROUND}}>

      <View style={styles.usercard}>
        <View style={styles.userDetails}>
            <Image source={require("@/assets/images/icon.png")} style={styles.userImage}/>
            <View>
                <Text style={styles.greeting}>Good Morning</Text>
                <Text style={styles.user}>User</Text>
            </View>
        </View>

        <View style={styles.notification}>
            <Ionicons name="notifications-outline" style={styles.notificationIcon} size={25}/>
        </View>
      </View>

      <View style={styles.metricsCard}>
        <View style={styles.metricsText}>
            <Text style={{
                fontSize: FONT_SIZE_H1,
                fontWeight: FONT_WEIGHT_BOLD,
                color: TEXT_PRIMARY
            }}>Daily goals</Text>
            <Text style={{
                fontSize: FONT_SIZE_TITLE,
                fontWeight: FONT_WEIGHT_BOLD,
                color: TEXT_SECONDARY
            }}>4 of 5 goals completed</Text>
        </View>
        <View>
            <ProgressChart
                data={data}
                width={100}
                height={100}
                strokeWidth={16}
                radius={37}
                chartConfig={chartConfig}
                hideLegend={true}
            />
        </View>
      </View>

      <View style={{margin:10, padding:10}}>

        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
            <Text style={{
                fontSize: FONT_SIZE_TITLE,
                fontWeight: FONT_WEIGHT_MEDIUM,
                color: TEXT_PRIMARY
            }}>Todays Goals</Text>
            <Link href={"/home"}><Text style={{
                fontSize: FONT_SIZE_SUBTITLE,
                fontWeight: FONT_WEIGHT_REGULAR,
                textDecorationLine:"underline",
                color: TEXT_SECONDARY,
                textDecorationColor:TEXT_SECONDARY
            }}>View All</Text></Link>
        </View>

        <View>

            <View style={styles.goalsCard}>

                <View style={styles.goalDescriptionCard}>
                    <View style={styles.imgContainer}>
                        <Image source={require("@/assets/images/icon.png")} style={styles.goalImg}/>
                    </View>

                    <View style={styles.goalTexts}>
                        <Text style={{
                            fontSize:FONT_SIZE_TITLE,
                            fontWeight: FONT_WEIGHT_BOLD,
                            color: TEXT_PRIMARY
                        }}>Drink water</Text>
                        <Text>10:45 am Daily</Text>

                        <View style={styles.progressBar}>
                            <View style={styles.progressLine}></View>
                        </View>

                    </View>
                </View>

                <View>
                    <Ionicons name="radio-button-off" size={20}/>
                </View>
                
            </View>


        </View>

      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    progressBar:{
        backgroundColor:PRIMARY_LIGHT,
        height: 5,
        width: 220,
        borderRadius: 10,
        overflow:"hidden"
    },
    progressLine:{
        backgroundColor:PRIMARY,
        height: 5,
        width: 100,
        borderRadius: 10,
    },
    usercard:{
        padding:10,
        margin: 10,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    userDetails:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap: 5
    },
    userImage:{
        height:50,
        width:50,
        borderRadius:50
    },
    greeting:{
        fontSize: FONT_SIZE_SUBTITLE,
        fontWeight: FONT_WEIGHT_REGULAR,
        color: TEXT_PRIMARY
    },
    user:{
        fontSize: FONT_SIZE_TITLE,
        fontWeight: FONT_WEIGHT_BOLD,
        color: TEXT_PRIMARY
    },
    notification:{
        padding:3,
        backgroundColor: SURFACE,
        borderRadius: 100
    },
    notificationIcon:{
        color:TEXT_PRIMARY
    },
    metricsCard:{
        backgroundColor: SURFACE,
        padding: 10,
        margin: 10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        borderRadius:10
    },
    metricsText:{
        flexDirection:"column",
        gap:20,
    },
    goalsCard:{
        padding: 10,
        backgroundColor: SURFACE,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent:"space-between",
        marginBlock:10,
        alignItems:"center"
    },
    goalDescriptionCard:{
        flexDirection: "row",
        gap:2,
        height: 60

    },
    imgContainer:{
        height:60,
        width: 60,
        overflow:"hidden",
        borderRadius: 10
    },
    goalImg:{
        objectFit:"cover",
        height: 60,
        width: 60
    },
    goalTexts:{
        flexDirection:"column",
        justifyContent:"space-between",
        marginLeft: 5
    }
});

export default home