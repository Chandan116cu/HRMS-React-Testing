import React, { Component } from "react";
import {
  Animated,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  Modal,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import Details from '../../components/Details';
import styles from "./styles";
import { Navigation } from 'react-native-navigation'
import thunk from "redux-thunk";
import submitTimesheet from '../../services/api/submitSheet'
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';




export default class ListSheet extends Component {

  constructor(props) {
    super(props);
  }

  

 

  state = {
    isVisible: "short",
    date:null,
    month:null,
    hour:null
  };

 

  componentDidMount() {
  this.setDayMonth(this.props.data.date)
  }

 
 


 

  

  render() {
   let content = (
    <FlatList
    getItemLayout={this.getItemLayout}
    ref={(ref) => { this.flatListRef = ref; }}
    contentContainerStyle={{ paddingBottom: 630, flexDirection: "column" }}
    style={{ paddingRight: 10, paddingLeft: 10, marginTop: 10 }}
    data={this.props.timesheet}
    extraData={this.props.timesheet}
    renderItem={({ item, index }) => (
      <Details
        key={index}
        data={item}
        // onPressItem={this._onPressItem}
        // selected={!!this.state.selected.get(item.id)}
        {...this.props} />
    )}

    keyExtractor={item => item.Id}>

  </FlatList>
   )

    return <View>{content}</View>;
  }
}





