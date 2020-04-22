import React, { Component } from 'react';
import {Dimensions } from "react-native";
import {
  Platform,
  StyleSheet,
  Text,View,TextInput,Button,Image,
  TouchableOpacity,Keyboard,AsyncStorage,CheckBox
} from 'react-native';
import styles from './styles';
// import {CheckBox} from 'react-native-elements';
const screenHeight = Math.round(Dimensions.get('window').height);

export class LoginUser extends Component {
  constructor(props){
    super(props);
    this.state={
      eid:'', 
      password:'',
      check:false
    }
  }
  CheckBoxTest(){
      this.setState({
        check:!this.state.check
      })
  }
myFun=() =>{
  const {eid,lname,password} = this.state;
  let myArray={
    eid: eid,
    password:password
  }
  AsyncStorage.setItem('myArray',JSON.stringify(myArray));

  if(eid==""){
    this.setState({Error: 'please fill the email id'});
  }
  
  else if(password==""){
    this.setState({Error: 'please fill the password'});
  }
  else if(password.length <5){
    this.setState({Error: 'password  must be more than 5'});
  }

  else{
    this.setState({Error: 'thank you, your form is submitted successfully'});
  }

  Keyboard.dismiss();
}
myData=async() =>{
  let myArray = await AsyncStorage.getItem('myArray');
  let d = JSON.parse(myArray);
  alert(d.eid + ' ' +d.lname + ' '+d.password)
  

  Keyboard.dismiss();
}
  render() {
    return (
      <View style={styles.container}>
      <Image style={styles.logo} 
        source={require('../../assests/logo.png')}
      ></Image>
      <Text style={{color:'white', textAlign:'center'}}>
      {this.state.Error}
      </Text>
      <TextInput
      placeholder="abc@cygrp.com"
      placeholderTextColor = "white"
      style={styles.myText}
      onChangeText={
        eid => this.setState({eid})
      }
      />

      <TextInput
      placeholder="password"
      placeholderTextColor = "white"
      secureTextEntry={true}
      style={styles.myText}
      onChangeText={
        password => this.setState({password})
      }
      />
     
      <TouchableOpacity
      onPress={this.myFun}
      style={{backgroundColor:'#e68a00',padding:10,width:320,paddind:10,margin:10,borderRadius:60}}
      >
      <Text style={{color:'white',textAlign:'center',
      fontSize:20,fontWeight:'bold'}}>Submit</Text>
      </TouchableOpacity>
      
      <Text style={{fontSize:10,color:'white'}}>
        Forgot UserId or Password ?
      </Text>
      </View>
    );
  }
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'black',
//     // width: window.length,
//     height: screenHeight
//   },
//   myText:{
//     borderWidth:1,borderColor:'white',color:'white',
//     margin:10, padding:10, width:'90%',borderRadius:60
//   },
//   logo:{
//     flex:0.3,
//     // position: 'absolute',
//     width: '40%',
//     height: '30%',
//   }
// });

