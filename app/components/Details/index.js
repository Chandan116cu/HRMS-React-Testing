import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import styles from "./styles";
import {Navigation} from 'react-native-navigation'

export default class Details extends Component {
  state = {
   
  };

  onClickHandler = () => {
    Navigation.push(this.props.componentId,{
      component: {
        name: 'ModalScreen',
        passProps: {
          text: 'Pushed screens'
        },
        options: {
          topBar: {
            title: {
              text: 'Edit Timesheet'
            }
          }
        }
      }
    });
  }
 
  


  render() {
    
    return (
      <View style={{flexDirection:"row",flex:1}} >
        <View style={{borderRightWidth:1,maxWidth:30,marginTop:0}}>
          <Text style={{width:30, height:50,marginRight:20}}>{this.props.data.from}</Text>
          <TouchableOpacity onPress={this.onClickHandler} >
            <Image  style={styles.PlusIcon} source={require('../../assets/icons/Edit.png')} />
        </TouchableOpacity>
          <TouchableOpacity onPress={this.onClickHandler} >
            <Image  style={styles.PlusIcon} source={require('../../assets/icons/PlusIcon.png')} />
        </TouchableOpacity>
        </View>
        <View style={{borderWidth:1,borderColor:'grey',width:'90%',padding:10,marginTop:0,marginRight:0,margin:10,backgroundColor:'#EAEAEA',flex:1,borderRadius:10}}>
          <View style={{flexDirection:"row"}}>
            <View style={{width:190}}>
              <Text >Customer</Text>
                  <Text style={{fontSize:15}}>{this.props.data.customer}</Text>
            </View>
            <View style={{marginLeft:0,width:200}}>
                <Text >Project</Text>
                <Text style={{fontSize:15}}>{this.props.data.project}</Text>
          </View>
            
          </View>
          <View style={{flexDirection:"row",marginTop:20}}>
                <View style={{marginLeft:0,width:190}}>
                  <Text>Task</Text>
                  <Text style={{fontSize:15}}>{this.props.data.task}</Text>
                </View>
          
                <View style={{marginLeft:0,flex:2}}>
                  <Text>Hours</Text>
                  <Text style={{fontSize:15,flex:2,fontSize:30}}>{this.props.data.hours}</Text>
                </View>
          </View>
          
          <View style={{maxWidth:500, marginTop:20}}>
              <Text>Company</Text>
              <Text style={{fontSize:15}}>{this.props.data.company}</Text>
          </View>
          
          
        </View>
      </View>
    );
  }
}
