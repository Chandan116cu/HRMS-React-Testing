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
      <View style={{flexDirection:"row"}} >
        <View style={{borderRightWidth:1,maxWidth:30,marginTop:10}}>
          <Text>{this.props.data.from}</Text>
        <TouchableOpacity onPress={this.onClickHandler} >
            <Image style={styles.PlusIcon} source={require('../../assets/icons/PlusIcon.png')} />
        </TouchableOpacity>
        </View>
        <View style={{borderWidth:1,borderColor:'grey',width:'90%',padding:10,marginLeft:10,marginTop:10,backgroundColor:'#EAEAEA'}}>
          <View style={{flexDirection:"row"}}>
          <View style={{marginLeft:20}}>
              <Text >Customer</Text>
                  <Text style={{fontSize:20}}>{this.props.data.customer}</Text>
              </View>
              <View style={{maxWidth:'60%',marginLeft:40}}>
              <Text>Company</Text>
                  <Text style={{fontSize:20}}>{this.props.data.company}</Text>
              </View>
          </View>
          <View style={{flexDirection:"row",marginTop:20}}>
          <View style={{marginLeft:20}}>
                <Text >Project</Text>
                <Text style={{fontSize:20}}>{this.props.data.project}</Text>
          </View>
          <View style={{marginLeft:30}}>
                <Text>Hours</Text>
                <Text style={{fontSize:20}}>{this.props.data.hours}</Text>
          </View>
          </View>
          
        </View>
        {/* <View style={{flexDirection:"row",flex:2}}>
 
        <View style={{borderRightWidth:2, borderColor:"#B1B1B1"}}>
            <TouchableOpacity onPress={this.onClickHandler} >
            <Image style={styles.PlusIcon} source={require('../../assets/icons/PlusIcon.png')} />
            </TouchableOpacity>
            </View>
          <View style={styles.detail}>
            <View>
            <View style={{flexDirection:"row",justifyContent:"space-between",padding:10,width:"80%"}}>
              <View >
                <View>
                <Text style={styles.headingColor}>Customer</Text>
                </View>
                
                <Text style={styles.textColor}>{this.props.data.customer}</Text>
              </View>
              <View  style={{padding:5}} >
                
                <Text style={styles.headingColor}>Company</Text>
                <View>
                <Text style={styles.textColor}>{this.props.data.company}</Text>
                </View>
              </View>
            </View>
            <View
            
            style={{flexDirection:"row",justifyContent:"space-between",padding:10,width:"70%"}}>
              <View >
                <Text style={styles.headingColor}>Project</Text>
                <Text style={styles.textColor}>{this.props.data.project}</Text>
              </View>
              <View >
                <Text style={styles.headingColor}>Hours</Text>
                <Text style={styles.textColor}>{this.props.data.hours}</Text>
              </View>
            </View>
            </View>
            
          </View>
     
      </View> */}
      </View>
    );
  }
}
