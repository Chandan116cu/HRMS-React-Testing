import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import TimeSheet from '../../components/TimeSheetDetails'
import {LayoutRoot} from 'react-native-navigation'
import styles from './style';
class DashBoard extends Component {
    
    
    render() {
        let content;
        content = (this.props.timesheet.map((payload, index) => (
            <TimeSheet
            key={index}
            data={payload}
            {...this.props}/>
            )))
        return(
            <View style={styles.container}>
      <Grid style={styles.GridViewContainer}>
        <Col>
          <Col  onPress={ this.alerta}  style={{backgroundColor: '#d6d6c2', margin:10 }}><Text style={styles.GridViewTextLayout}>Add Timesheet</Text></Col>
          <Row   onPress={ this.alerta}  style={{backgroundColor: '#d6d6c2',margin:10 }}><Text style={styles.GridViewTextLayout}>My Submissions</Text></Row>
        </Col>
        <Col>
          <Row  onPress={ this.alerta}  style={{backgroundColor: '#d6d6c2',margin:10 }}><Text style={styles.GridViewTextLayout}>My Approvals</Text></Row>
          <Row  onPress={ this.alerta}  style={{backgroundColor: '#d6d6c2',margin:10 }}><Text style={styles.GridViewTextLayout}>Contact</Text></Row>
        </Col>
      </Grid>
      </View>
      
    );
        
    }
    alerta(){
        Alert.alert('testing');
   }
}
mapStateToProps=(state)=> {
    const { timeSheets } = state
    return { timesheet : timeSheets.payload }
}

export default connect(mapStateToProps)(DashBoard)