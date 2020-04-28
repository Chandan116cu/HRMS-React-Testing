import React, { Component } from "react";
import { Text, Dimensions, View, TouchableOpacity, Image, StyleSheet, SafeAreaView, Alert, Modal, TextInput, Button, ActivityIndicator, ProgressBarAndroid, SectionList, FlatList } from 'react-native';
const screenHeight = Math.round(Dimensions.get('window').height);
import AsyncStorage from '@react-native-community/async-storage';
import TimeSheetExpandedDetails from '../TimeSheetExpandedDetails'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Navigation } from 'react-native-navigation'
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
// import fetchSheets from '../../services/api/fetchSheets'
import submitSheet from '../../services/api/submitSheet'
import moment from "moment";
class AddTimeSheet extends Component {
  constructor(props) {
    super(props);

  }

  months = {
    "0": "Jan",
    "1": "Feb",
    "2": "Mar",
    "3": "Apr",
    "4": "May",
    "5": "Jun",
    "6": "Jul",
    "7": "Aug",
    "8": "Sep",
    "9": "Oct",
    "10": "Nov",
    "11": "Dec",
  }

  async componentDidMount() {
  
    //  AsyncStorage.removeItem('@savedBeginDate')
    //  AsyncStorage.removeItem('@savedEndDate')   
   await this.getBeginSavedDate();
   await this.getEndSavedDate();
  }


  async getBeginSavedDate () {

    try {
    
      const savedBeginDate = await AsyncStorage.getItem('@savedBeginDate')

    // debugger
      if (savedBeginDate !== null) {
        // value previously stored
        const dateObj = new Date(savedBeginDate)
         this.setState({
          Bdate: dateObj,
          beginDate: dateObj.getDate(),
          beginMonth: dateObj.getMonth(),
          beginYear: dateObj.getFullYear(),
        })
      }else {
        const startOfWeek = moment().startOf('week').toDate();

      
        this.setState({
          Bdate:startOfWeek,
          beginDate: startOfWeek.getDate(),
          beginMonth: startOfWeek.getMonth(),
          beginYear: startOfWeek.getFullYear(),
        })
        await AsyncStorage.setItem('@savedBeginDate',startOfWeek.toDateString());
      }

     
    } catch (e) {
      // error reading value
      alert("Try again")
    }
  }


  async getEndSavedDate() {

    try {
    
     
      const savedEndDate = await AsyncStorage.getItem('@savedEndDate')
     
// console.log(savedEndDate)
      if (savedEndDate !== null) {
        const dateObj = new Date(savedEndDate)
        this.setState({
          Edate:dateObj,
          endDate: dateObj.getDate(),
          endMonth: dateObj.getMonth(),
          endYear: dateObj.getFullYear(),
        })
      }else {
        const endOfWeek   = moment().endOf('week').toDate();
        this.setState({
          Edate:endOfWeek,
          endDate: endOfWeek.getDate(),
          endMonth: endOfWeek.getMonth(),
          endYear: endOfWeek.getFullYear(),
        })

        await AsyncStorage.setItem('@savedEndDate',endOfWeek.toDateString());
      }
    } catch (e) {
      // error reading value
      alert("Try again")
    }
  }

  state = {
    Bdate: null,
    Edate: null,
    beginDate: null,
    beginMonth: null,
    beginYear: null,
    endDate:null,
    endMonth: null,
    endYear: null,
  }

  

  showDatePicker = async (selected) => {

    if (selected === "Begin") {
      await this.setState({ check: "Begin", isDatePickerVisible: true })
    }

  };

  hideDatePicker = () => {
    this.setState({ isDatePickerVisible: false });
  };

  handleConfirm = async (date) => {
    // debugger;
    if (this.state.check === "Begin") {
      var checkDay = date.getDay()
      if (checkDay === 0) {
        // debugger
        const momentObj = moment(date);
        // console.log(momentObj.toString())
        // console.log(moment(date).endOf('week').toDate().toString());
        await AsyncStorage.setItem('@savedBeginDate', momentObj.toString());
        await AsyncStorage.setItem('@savedEndDate',moment(date).endOf('week').toDate().toString() );
        this.setState({
          Bdate:momentObj,
          Edate: moment(date).endOf('week').toDate(),
          beginYear: date.getFullYear(),
          beginMonth: date.getMonth(),
          beginDate: date.getDate(),
          endDate: date.getDate(date.setDate(date.getDate() + 6)),
          endYear: date.getFullYear(date.setDate(date.getDate() + 6)),
          endMonth: date.getMonth(date.setDate(date.getDate() + 6))
        })
        // await AsyncStorage.setItem('@BeginDate', JSON.stringify(this.state.beginDate));
        // await AsyncStorage.setItem('@BeginMonth', JSON.stringify(this.state.beginMonth));
        // await AsyncStorage.setItem('@BeginYear', JSON.stringify(this.state.beginYear));


        // await AsyncStorage.setItem('@EndDate', JSON.stringify(this.state.endDate))
        // await AsyncStorage.setItem('@EndMonth', JSON.stringify(this.state.endMonth))
        // await AsyncStorage.setItem('@EndYear', JSON.stringify(this.state.endYear))
// 
       

      } else {
        alert("Select date correspond to Sunday")
      }
    }


    this.setState({ isDatePickerVisible: false });
  };


  
  onClickHandler = async () => {
   
    // onst datesArray = this.enumerateDaysBetweenDates(this.state.);
  
    Navigation.push(this.props.componentId, {
      component: {
        name: 'ModalScreen',
        passProps: {
         
          text: 'Pushed screens',
          sheetType: 'newSheet',
          beginDate:this.state.Bdate ,
          endDate:this.state.Edate,
          timesheet: this.props.timesheetJson,
          
        
        },
        options: {
          topBar: {
            title: {
              text: 'Edit Timesheet',
              alignment: 'center'
            }
          }
        }
      }
    });
  }
  render() {
    return (
      <View>
        <View style={{ flexDirection: "row", borderWidth: 1, borderRadius: 10, borderColor: 'grey', marginLeft: 10, marginRight: 10, marginTop: 10 }}>
          <View style={{ width: '50%', padding: 15, borderRightWidth: 1 }}>
            <TouchableOpacity onPress={() => { this.showDatePicker("Begin") }}>
              <Text>Begin Date</Text>
              <Text style={{ fontSize: 25, fontWeight: "900" }}>{this.state.beginDate + " " + this.months[this.state.beginMonth]}</Text>
              <Text style={{ textAlign: "right", width: 80 }}>{this.state.beginYear}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={this.state.isDatePickerVisible}
              mode="date"
              onConfirm={this.handleConfirm}
              onCancel={this.hideDatePicker}
            />

          </View>
          <View style={{ width: '50%', padding: 15 }}>

            <Text style={{ marginLeft: 40 }}>End Date</Text>
            <Text style={{ marginLeft: 40, fontSize: 25, fontWeight: "900" }}>{this.state.endDate + " " + this.months[this.state.endMonth]}</Text>
            <Text style={{ marginLeft: 40, textAlign: "right", width: 80 }}>{this.state.endYear}</Text>



          </View>
        </View>
        <TimeSheetExpandedDetails {...this.props} />
        <TouchableOpacity
          activeOpacity={1}
          onPress={this.onClickHandler}
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
    top: screenHeight/1.2
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
});

mapStateToProps = (state) => {
  const { draftedSheets } = state
  return {
    timesheetJson:draftedSheets.data,
    timesheet: draftedSheets.data.data,
    loading: draftedSheets.isLoading
  }
}

// const mapDispatchToProps = dispatch => bindActionCreators({
//   submitTimesheet
// }, dispatch)

// const mapDispatchToProps = dispatch => bindActionCreators({
//   submitSheet
// }, dispatch)
// export default connect(null, mapDispatchToProps)(ModalScreen)

export default connect(mapStateToProps)(AddTimeSheet)