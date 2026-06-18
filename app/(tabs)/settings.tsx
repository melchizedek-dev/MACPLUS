import { SURFACE, TEXT_PRIMARY } from '@/constants/colors';
import { FONT_SIZE_BUTTON, FONT_SIZE_H1, FONT_WEIGHT_BOLD, FONT_WEIGHT_REGULAR } from '@/constants/fontSizes';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Settings = () => {
  return (
    <View>
      <Text style={styles.pageTitle}>Settings</Text>
      <ScrollView>
      
      <View style={styles.settingsCard}>
        <Text style={styles.settingsCardTitle}>Profile</Text>

        <View style={styles.settingsCardContent}>

          <View style={styles.settingsCardItems}>
            <View style={styles.settingsCardFonts}>
              <FontAwesome6 name="envelope" size={24} color={TEXT_PRIMARY} />
              <Text style={styles.settingsCardText}>Email</Text>
            </View>
            <Entypo name="arrow-with-circle-right" size={24} color="black" />
          </View>
          
          <View style={styles.settingsCardItems}>
            <View style={styles.settingsCardFonts}>
              <FontAwesome name="user-o" size={24} color="black" />
              <Text style={styles.settingsCardText}>Full Name</Text>
            </View>
            <Entypo name="arrow-with-circle-right" size={24} color="black" />
          </View>

          <View style={styles.settingsCardItems}>
            <View style={styles.settingsCardFonts}>
              <FontAwesome name="user-o" size={24} color="black" />
              <Text style={styles.settingsCardText}>Language</Text>
            </View>
            <Entypo name="arrow-with-circle-right" size={24} color="black" />
          </View>

          <View style={styles.settingsCardItems}> 
            <View style={styles.settingsCardFonts}>
              <FontAwesome name="user-o" size={24} color="black" />
              <Text style={styles.settingsCardText}>Privacy</Text>
            </View>
            <Entypo name="arrow-with-circle-right" size={24} color="black" />
          </View>

        </View>
      </View>
      
      <View style={styles.settingsCard}>
        <Text style={styles.settingsCardTitle}>Preferences</Text>

        <View style={styles.settingsCardContent}>

          <View style={styles.settingsCardItems}>
            <View style={styles.settingsCardFonts}>
              <FontAwesome6 name="envelope" size={24} color={TEXT_PRIMARY} />
              <Text style={styles.settingsCardText}>Email</Text>
            </View>
            <Entypo name="arrow-with-circle-right" size={24} color="black" />
          </View>
          
          <View style={styles.settingsCardItems}>
            <View style={styles.settingsCardFonts}>
              <FontAwesome name="user-o" size={24} color="black" />
              <Text style={styles.settingsCardText}>Full Name</Text>
            </View>
            <Entypo name="arrow-with-circle-right" size={24} color="black" />
          </View>

          <View style={styles.settingsCardItems}>
            <View style={styles.settingsCardFonts}>
              <FontAwesome name="user-o" size={24} color="black" />
              <Text style={styles.settingsCardText}>Language</Text>
            </View>
            <Entypo name="arrow-with-circle-right" size={24} color="black" />
          </View>

          <View style={styles.settingsCardItems}> 
            <View style={styles.settingsCardFonts}>
              <FontAwesome name="user-o" size={24} color="black" />
              <Text style={styles.settingsCardText}>Privacy</Text>
            </View>
            <Entypo name="arrow-with-circle-right" size={24} color="black" />
          </View>

        </View>
      </View>
      
      <View style={styles.settingsCard}>
        <Text style={styles.settingsCardTitle}>Danger Zone</Text>

        <View style={styles.settingsCardContent}>

          <View style={styles.settingsCardItems}>
            <View style={styles.settingsCardFonts}>
              <FontAwesome6 name="envelope" size={24} color={TEXT_PRIMARY} />
              <Text style={styles.settingsCardText}>Email</Text>
            </View>
            <Entypo name="arrow-with-circle-right" size={24} color="black" />
          </View>
          
          <View style={styles.settingsCardItems}>
            <View style={styles.settingsCardFonts}>
              <FontAwesome name="user-o" size={24} color="black" />
              <Text style={styles.settingsCardText}>Full Name</Text>
            </View>
            <Entypo name="arrow-with-circle-right" size={24} color="black" />
          </View>

          <View style={styles.settingsCardItems}>
            <View style={styles.settingsCardFonts}>
              <FontAwesome name="user-o" size={24} color="black" />
              <Text style={styles.settingsCardText}>Language</Text>
            </View>
            <Entypo name="arrow-with-circle-right" size={24} color="black" />
          </View>

          <View style={styles.settingsCardItems}> 
            <View style={styles.settingsCardFonts}>
              <FontAwesome name="user-o" size={24} color="black" />
              <Text style={styles.settingsCardText}>Privacy</Text>
            </View>
            <Entypo name="arrow-with-circle-right" size={24} color="black" />
          </View>

        </View>
      </View>

    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  pageTitle:{
    alignSelf:"center",
    fontSize: FONT_SIZE_H1,
    fontWeight: FONT_WEIGHT_BOLD,
    margin: 20,
    color: TEXT_PRIMARY
  },
  settingsCard:{
    padding:15,
    margin:20,
    borderRadius: 10,
    backgroundColor:SURFACE,
  },
  settingsCardTitle:{
    fontSize:FONT_SIZE_H1-1,
    fontWeight:FONT_WEIGHT_BOLD,
    marginBlock:10,
  },
  settingsCardContent:{
    flexDirection:"column",
    gap:25
  },
  settingsCardItems:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  settingsCardFonts:{
    flexDirection:"row",
    alignItems:"center",
    gap:10
  },
  settingsCardText:{
    fontSize: FONT_SIZE_BUTTON,
    fontWeight: FONT_WEIGHT_REGULAR
  }
});

export default Settings