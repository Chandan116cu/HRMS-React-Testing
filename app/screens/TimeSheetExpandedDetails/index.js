import React, { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView, SafeAreaView, Alert, Modal, TextInput, Button, ActivityIndicator, ProgressBarAndroid, SectionList } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import Details from '../../components/Details';
import thunk from "redux-thunk";
import { connect } from 'react-redux';
import { Navigation } from "react-native-navigation"
import DatePicker from 'react-native-datepicker'
import { bindActionCreators } from 'redux';
import fetchSheets from '../../services/api/fetchSheets'
import {Loading} from '../../modules/actions/days'

// import styles from "../../components/Details/styles";
class TimeSheetExpandedDetails extends Component {

  constructor(props) {
    super(props);

  }
  state = {
    modalVisible: false,
  }
  componentDidMount() {
    // let data = {
    //   day: null,
    //   from: this.props.from,
    //   to: this.props.to,
    // }
    // this.props.fetchSheets(data)
  }

  ListAsPerDay =  (day) => {

    let data = {
      day: day,
      from: this.props.from,
      to: this.props.to,
    }
 
    this.props.fetchSheets(data)
  
  }

   Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title.customer}</Text>
      <Text style={{fontSize:20}}>{title.hours}</Text>
      <Text style={{fontSize:20}}>{title.company}</Text>
    </View>
  );
  

  
  state = {
    showSheet: true,
    day: "Monday",
    timesheetToRender: this.props.timesheet,
    isLoading: false
    // isLoading: false
  };

  render() {

    let content;
    let contentToShow;
    if (this.state.showSheet === true && this.props.loading===false) {
      contentToShow = (
       this.props.timesheet.map((payload, index) => (
          <Details
        
            key={index}
            data={payload}
            {...this.props} />
        ))
      )
    }else {
      
       contentToShow = (
      //  <ActivityIndicator size="large" color="blue" style={{alignContent:"center"}}/>
       <ProgressBarAndroid/>
       ) 
      }
    
    content = (
      <SafeAreaView>



          <View style={{ flexDirection: "row", borderWidth: 1,borderRadius: 10, borderColor: 'grey', marginLeft: 10, marginRight: 10, marginTop: 10 }}>
            <View style={{ width: '50%', padding: 15 }}>
              <Text>Begin Date</Text>
              <DatePicker
                date={this.props.from}
                mode="date"
                // placeholder={this.props.from}
                format="DD-MM-YYYY"
                minDate="2016-05-01"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                androidMode='spinner'
                customStyles={{
                  dateInput: {
                    borderWidth: 0,
                  },
                  dateIcon: {
                    display: "none",
                  },
                  // ... You can check the source to find the other keys.
                }}
              />
            </View>
            <View style={{ width: '50%', padding: 15 }}>
              <Text>End Date</Text>
              <DatePicker

                date={this.props.to}
                mode="date"
                // placeholder={this.props.to}
                format="DD-MM-YYYY"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                androidMode='spinner'
                customStyles={{
                  dateInput: {
                    borderWidth: 0,
                  },
                  dateIcon: {
                    display: "none",

                  },
                  // ... You can check the source to find the other keys.
                }} />
            </View>
          </View>
          <ScrollView style={{padding:0, margin:0}}>
            <View style={{ flexDirection: "column", justifyContent: "space-evenly", padding: 10,borderRadius:10, borderWidth: 1, marginLeft: 10, marginRight: 10, marginTop: 10, borderColor: 'grey' }}>
              <View style={{flexDirection:"row", justifyContent:"space-around"}} >
              <Text style={{ fontSize: 11 }}>S</Text>
              <Text style={{ fontSize: 11 }}>M</Text>

              <Text style={{ fontSize: 11 }}>T</Text>

              <Text style={{ fontSize: 11 }}>W</Text>
              <Text style={{ fontSize: 11 }}>T</Text>
              <Text style={{ fontSize: 11 }}>F</Text>
              <Text style={{ fontSize: 11 }}>S</Text>
              </View>
              <View style={{flexDirection:"row", justifyContent:"space-around"}}>
              <TouchableOpacity onPress={() => this.ListAsPerDay("Sunday")}>
                <ProgressCircle
                  percent={100}
                  radius={20}
                  borderWidth={4}
                  color="#228B22"
                  shadowColor="#999"
                  bgColor="#fff"
                >
                  <Text style={{ fontSize: 11 }}>8</Text>
                </ProgressCircle>
              </TouchableOpacity>

              
              
              
              <TouchableOpacity day="Monday" onPress={() => this.ListAsPerDay("Monday")}>
                <ProgressCircle
                  percent={100}
                  radius={20}
                  borderWidth={4}
                  color="#228B22"
                  shadowColor="#999"
                  bgColor="#fff"

                >
                  <Text style={{ fontSize: 11 }}>8</Text>
                </ProgressCircle>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.ListAsPerDay("Tuesday")}>
                <ProgressCircle
                  percent={100}
                  radius={20}
                  borderWidth={4}
                  color="#228B22"
                  shadowColor="#999"
                  bgColor="#fff"
                >
                  <Text style={{ fontSize: 11 }}>8</Text>
                </ProgressCircle>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.ListAsPerDay("Wednesday")}>
                <ProgressCircle
                  percent={100}
                  radius={20}
                  borderWidth={4}
                  color="#228B22"
                  shadowColor="#999"
                  bgColor="#fff"
                >
                  <Text style={{ fontSize: 11 }}>8</Text>
                </ProgressCircle>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.ListAsPerDay("Thrusday")}>
                <ProgressCircle
                  percent={100}
                  radius={20}
                  borderWidth={4}
                  color="#228B22"
                  shadowColor="#999"
                  bgColor="#fff"
                >
                  <Text style={{ fontSize: 11 }}>8</Text>
                </ProgressCircle>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.ListAsPerDay("Friday")}>
                <ProgressCircle
                  percent={100}
                  radius={20}
                  borderWidth={4}
                  color="#228B22"
                  shadowColor="#999"
                  bgColor="#fff"
                >
                  <Text style={{ fontSize: 11 }}>8</Text>
                </ProgressCircle>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.ListAsPerDay("Saturday")}>
                <ProgressCircle
                  percent={100}
                  radius={20}
                  borderWidth={4}
                  color="#228B22"
                  shadowColor="#999"
                  bgColor="#fff"
                >
                  <Text style={{ fontSize: 11 }}>8</Text>
                </ProgressCircle>
              </TouchableOpacity>
              </View>

           

            
            </View>
            
       
          
            
            <View style={{ paddingRight: 10,paddingLeft:10,paddingBottom:0,paddingTop:0, marginTop: 10, marginBottom: 200 }}>{contentToShow}</View>
          </ScrollView>

      </SafeAreaView>
    );

    return <View>{content}</View>
  }
}
mapStateToProps = (state) => {
  const { days} = state
  return { timesheet: days.data,
  loading: days.isLoading }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchSheets
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TimeSheetExpandedDetails)