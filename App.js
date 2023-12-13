import React, { useRef, useState } from 'react'
import * as ViewPropTypes from 'react-native';
import { View,Dimensions,StyleSheet } from 'react-native'
import { RNCamera } from 'react-native-camera'

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

 const App = () => {

    const [type,setType] = useState(RNCamera.Constants.Type.back)
    const [box,setBox] = useState(null)
    const cameraRef = useRef(null)

    const faceHandler = (faceData)=>{
        if(faceData?.faces?.length>0){

            console.log(faceData);
        }
    }


  return (
    <View style={styles.container}>
        <RNCamera
        onFacesDetected={faceHandler}
        ref={cameraRef}
        style={styles.camera}
        type={type}
        ></RNCamera>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
    camera:{
        flexGrow:1
    },
    container:{
        flex:1,
        backgroundColor:'gray'
    }
})
