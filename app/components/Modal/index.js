import React, {Component } from "react";
import {Modal,View, ScrollView, Button, Text, TextInput} from 'react-native'

export default class ModalSheet extends Component{
    state = {
        modalVisible: false,
        opacity: 1
      };
    
      setModalVisible(visible,opacity) {
        this.setState({modalVisible: visible, opacity: opacity});
      }
    render(){
        return(
            <View style={{marginTop: 22, height:'30%'}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible,1)
          }}>
          <View style={{marginTop: 22,
          // flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:'white',
          width:'70%',
          height:'50%',
          marginLeft:'15%',
          marginRight:'20%',
          marginTop:150,
          borderRadius:30
          }}>
            <ScrollView>
            <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          }}>
              <Text>Customer</Text>
              <TextInput style={{backgroundColor:"#BEBCBC",width:'90%',textAlign:"center"}}></TextInput>
              <Text>Company</Text>
              <TextInput style={{backgroundColor:"#BEBCBC",width:'90%',textAlign:"center"}}></TextInput>
              <Text>Project</Text>
              <TextInput style={{backgroundColor:"#BEBCBC",width:'90%',textAlign:"center"}}></TextInput>
              <Text>Hours</Text>
              <TextInput style={{backgroundColor:"#BEBCBC",width:'90%',textAlign:"center"}}></TextInput>
              {/* <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      /> */}
              <Button title='Submit'></Button>
            </View>
            </ScrollView>
          </View>
        </Modal>
      </View>
        );
    }
}
