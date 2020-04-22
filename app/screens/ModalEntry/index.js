import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert,Picker, TextInput, Button} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import {SubmitSheets} from '../../services/api/submitSheet'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

 class ModalScreen extends Component {
    state = {
        modalVisible: false,
        language: 'Choose Customer'
      };
    onClickhandler= () => {

        this.props.SubmitSheets(data);
    }

  render() {
    let data = [{
      value: 'Hp',
    }, {
      value: 'Dell',
    }, {
      value: 'Apple',
    }];
    return (
      <View style={{padding:20}}>
        <View>
          <Text>Customer</Text>
          <Dropdown
        label='Choose Customer'
        data={data}
         />
        </View>
        <View>
        <Text>Project</Text>
          <Dropdown
         
        label='Choose Project'
        data={data}
         />
        </View>
        <View >
        <Text>Task</Text>
          <Dropdown
          
        label='Choose Task'
        data={data}
         />
        </View>
        <View >
        <Text>Hours</Text>
          <TextInput placeholder='Enter Hours'></TextInput>
        </View>
        <View>
        <Text>Company</Text>
          <Dropdown 
        label='Choose Company'
        data={data}
         />
        </View>
        <View style={{marginTop:10}}>
          <Button title='Save and Continue'/>
        </View>
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  SubmitSheets
}, dispatch)
export default connect(null,mapDispatchToProps)(ModalScreen)