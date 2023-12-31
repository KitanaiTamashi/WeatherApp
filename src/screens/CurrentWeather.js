import React from "react"
import { View, Text, SafeAreaView, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons'; 

const CurrentWeather = ( )=>{
  return(
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
      <Text> </Text>
      <Text> </Text>
      <Feather name="sun" size={100} color="black" />
      <Text> Current Weather</Text>
      <Text style={styles.temp}> 6 </Text>
      <Text style={styles.feels}> Feels like 5</Text>
      <View style={styles.highLowWrapper}>
      <Text style={styles.highLow}>High: 8 </Text>
      <Text style={styles.highLow}>Low: 6</Text>
      </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Its sunny</Text>
        <Text style={styles.message}>Its perfect t-shirt weather</Text>
      </View>
    
    </SafeAreaView>
    
  )
}

const styles= StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'gray'
  },
  container:{
    backgroundColor: 'gray',
    flex: 1,
    justifyContent: 'center',
    
    alignItems: 'center'
  },
  temp:{
    color:'black',
    fontSize: 48
  },
  feels:{
    fontSize: 30,
    color:'black'
  },
  highLow:{
    color:'black',
    fontSize: 20
  },
  highLowWrapper:{
    flexDirection: 'row'
  },
  bodyWrapper:{
    justifyContent:'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description:{
    fontSize: 25
  },
  message:{
    fontSize:25
  }

})

export default CurrentWeather