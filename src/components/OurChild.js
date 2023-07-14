import React from 'react'
import {View, Text} from 'react-native'

const OurChild= (props) =>{
    const{message} = props
    return(
    <View style={{ height: 100, width: 100, backgroundColor: 'red'}}>
        <Text> {message}</Text>
    </View>
    )
    
}

export default OurChild