import { PRIMARY, SURFACE, TEXT_MUTED, TEXT_PRIMARY } from '@/constants/colors';
import { FONT_SIZE_H1, FONT_SIZE_TITLE, FONT_WEIGHT_BOLD, FONT_WEIGHT_SEMIBOLD } from '@/constants/fontSizes';
import { IMAGES } from '@/constants/images';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface imageItem{
    id: number,
    category: string,
    image: number
}


const images: imageItem[] = IMAGES;

const columns:imageItem[][] = [];

for (let i = 0; i < images.length; i+=4) {
  columns.push(images.slice(i, i+4));
}

const CreateRoutine = () => {
  
  const [selectImage, setSelectImage] = useState<number | null>(null);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [routineDate, setRoutineDate] = useState<string>("Daily")
  const [routineTime, setRoutineTime] = useState<string>("Daily")

  const select = ({id}:{id:number})=>{
    setSelectImage(id);
  }

  const handleTimePicker = ()=>{
    setShowTimePicker(true);
  }

  const handleDatePicker = ()=>{
    setShowDatePicker(true);
  }

  const onChangeDate = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
       setRoutineDate(selectedDate.toLocaleDateString());
    }
  }

  const onChangeTime = (event: DateTimePickerEvent, selectedTime?: Date) => {
    setShowTimePicker(false);
    if (selectedTime) {
       setRoutineTime(selectedTime.toLocaleTimeString());
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1, padding:10, margin:10 }}>
        <Text style={styles.pageTitle}>Add new routine</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Routine Name</Text>
            <TextInput style={styles.input}/>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Choose Routine Image</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {columns.map((item, itemIndex)=>(
                <View key={itemIndex} style={styles.column} >
                  {item.map(({id, image, category})=>(
                    <TouchableOpacity key={id} style={[styles.item, selectImage== id && {backgroundColor: PRIMARY}]} onPress={()=>select({id})}>
                      <Image source={image} style={styles.image}/>
                    </TouchableOpacity>
                  ))}
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Routine Date</Text>

            {showDatePicker&&(
                <DateTimePicker
                  value={new Date()}
                  mode="date"
                  display="default"
                  onChange={onChangeDate}
                />
            )}

            <TouchableOpacity style={styles.input} onPress={handleDatePicker}>
              <Text>{routineDate}</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Routine Time</Text>
            {showTimePicker&&(
                <DateTimePicker
                  value={new Date()}
                  mode="time"
                  display="default"
                  onChange={onChangeTime}
                />
            )}

            <TouchableOpacity style={styles.input} onPress={handleTimePicker}>
              <Text>{routineTime}</Text>
            </TouchableOpacity>
          </View>

          
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.buttonText}>Add Routine</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
  formGroup:{
    flexDirection: "column",
    gap: 10,
    paddingBlock: 10,

  },
  input:{
    padding: 10,
    backgroundColor: SURFACE,
    borderWidth: 0.2,
    borderColor: TEXT_MUTED,
    borderRadius: 5,
    color: TEXT_PRIMARY
  },
  label:{
    fontSize: FONT_SIZE_TITLE,
    fontWeight: FONT_WEIGHT_SEMIBOLD,
    color: TEXT_PRIMARY
  },
  submitButton:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginBlock:50,
    borderRadius: 10,
    backgroundColor: PRIMARY,
    padding: 10,

  },
  buttonText:{
    color:TEXT_PRIMARY,
    fontSize:FONT_SIZE_TITLE,
    fontWeight: FONT_WEIGHT_SEMIBOLD
  },
  routineImages:{
    height: 200,
  },
   column: {
    marginRight: 12,
  },

  item: {
    width: 80,
    height: 80,
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor:TEXT_PRIMARY,
    padding: 2,
    
  },

  image: {
    width: 80,
    height: 80,
  },

});

export default CreateRoutine
