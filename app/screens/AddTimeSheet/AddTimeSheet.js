import React, { Component } from "react";
import { Text,Dimensions, View, TouchableOpacity,Image, StyleSheet, SafeAreaView, Alert, Modal, TextInput, Button, ActivityIndicator, ProgressBarAndroid, SectionList, FlatList } from 'react-native';
const screenHeight = Math.round(Dimensions.get('window').height);
import TimeSheetExpandedDetails from '../TimeSheetExpandedDetails'
export default class AddTimeSheet extends Component {
    constructor(props) {
        super(props);
        
    }
    render(){
        return(
            <View>
 <TimeSheetExpandedDetails/>
 <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.clickHandler}
          style={styles.TouchableOpacityStyle}>
          <Image
            //We are making FAB using TouchableOpacity with an image
            //We are using online image here
            source={require('../../assets/icons/PlusSheet.png')}
            //You can use you project image Example below
            //source={require('./images/float-add-icon.png')}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
           
            </View>
           
        );
    }
}
const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5F5F5',
    },
  
    TouchableOpacityStyle: {
      position: "absolute",
      width: 50,
      height: 50,
      alignItems: "flex-end",
      justifyContent: "flex-end",
      right: 20,
      bottom: 0,
      top: screenHeight/1.19
    },
  
    FloatingButtonStyle: {
      resizeMode: 'contain',
      width: 50,
      height: 50,
      //backgroundColor:'black'
    },
  });