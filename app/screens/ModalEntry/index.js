import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert, TextInput, Button } from 'react-native';
// import { Dropdown } from 'react-native-material-dropdown';
import { SubmitSheets } from '../../services/api/submitSheet'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Picker } from '@react-native-community/picker';
import AsyncStorage from '@react-native-community/async-storage';
import submitSheet from '../../services/api/submitSheet'
// import { Date } from 'core-js';
import moment from "moment";

class ModalScreen extends Component {
  state = {
    modalVisible: false,
    language: 'Choose Customer',
    customer: null,
    task: null,
    project: null,
    hours: null,
    company: null,
    date: new Date(),
    dateArray: null,
    month: null,
    dateNum: null
  };

  textChange = (text) => {
    this.setState({
      hours: text
    })
  }

  months = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec",
  }

  //  custom_sort = (a, b) => {
  //   return new Date(a.data.date).getTime() - new Date(b.data.date).getTime();
  //  }



  onClickhandler = () => {
    // await AsyncStorage.removeItem('@timesheet');
    // const items = await AsyncStorage.getItem('@timesheet');
    // console.log(items)
    // const items = await AsyncStorage.getItem('@timesheet');
    if (this.props.sheetType === "addMoreExisting") {
      const items = this.props.timesheet;
      console.log(this.state.date)
      const datas = {
        Id: Date.now().toString(),
        customer: this.state.customer,
        task: this.state.task,
        project: this.state.project,
        hours: this.state.hours,
        company: this.state.company,
        date: this.props.data.date,
        month: this.props.data.month,
        dateNum: this.props.data.dateNum
        //  day: this.state.date.getDay()
      }
      // const obj = JSON.parse(items);
      // obj["data"].push(datas);
      items["data"].push(datas)
      // const obj = items;
      // obj = this.sort(obj)
      // debugger
      items.data.sort((a, b) => {

        // console.log(new Date(a.date))
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      })
      // obj.sort(this.custom_sort);
      // await AsyncStorage.setItem('@timesheet', JSON.stringify(obj))
      this.dispatchProcess(items);
    } else {
      const items = this.props.timesheet;
      // debugger





      //  console.log(JSON.parse(items))

      //  console.log("outside")
      if (items.data === null) {

        const data = {
          "data": [{
            Id: Date.now().toString(),
            customer: this.state.customer,
            task: this.state.task,
            project: this.state.project,
            hours: this.state.hours,
            company: this.state.company,
            date: this.state.date,
            month: this.state.month,
            dateNum: this.state.dateNum

            //  day: this.state.date.getDay()

          }]
        }
        //  items["data"].push(data);
        // await AsyncStorage.setItem('@timesheet', JSON.stringify(data));
        this.props.submitSheet(data);

      } else {

        const datas = {
          Id: Date.now().toString(),
          customer: this.state.customer,
          task: this.state.task,
          project: this.state.project,
          hours: this.state.hours,
          company: this.state.company,
          date: this.state.date,
          month: this.state.month,
          dateNum: this.state.dateNum
          //  day: this.state.date.getDay()
        }
        // const obj = JSON.parse(items);
        // obj["data"].push(datas);
        items["data"].push(datas)
        // const obj = items;
        // obj = this.sort(obj)
        // debugger
        items.data.sort((a, b) => {

          // console.log(new Date(a.date))
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        })
        // obj.sort(this.custom_sort);
        // await AsyncStorage.setItem('@timesheet', JSON.stringify(obj))
        this.dispatchProcess(items);
      }

    }


  }


  dispatchProcess = (items) => {
    this.props.submitSheet(items);
  }

  // sort = async (items) => {
  //       items.data.sort((a,b) => {

  //       // console.log(new Date(a.date))
  //       return new Date(a.date).getTime() - new Date(b.date).getTime();
  //     })
  //     return items
  // }

  enumerateDaysBetweenDates(startDate, endDate) {

    const dates = [];
    const currDate = moment(startDate).startOf('day');
    dates.push(currDate.clone().format('YYYY-MM-DD'))
    const lastDate = moment(endDate).startOf('day');

    while (currDate.add(1, 'days').diff(lastDate) < 0) {
      // console.log(currDate.format('DD-MM-YYYY'));
      dates.push(currDate.clone().format('YYYY-MM-DD'));
    }
    dates.push(currDate.clone().format('YYYY-MM-DD'))
    return dates;
  };

  componentDidMount() {

    const array = this.enumerateDaysBetweenDates(this.props.beginDate, this.props.endDate);

    this.setState({
      dateArray: array
    })
    // if(this.props.sheetType==="addMoreExisting"){
    //     this.setState({
    //       date: this.props.data.date
    //     })
    //     console.log(this.state.date)
    // }
  }
  // async setDayMonth(date) {
  //   const dateSlice = date.slice(8,10);
  //   const month = date.slice(5,7)
  //  this.setState({
  //     date: dateSlice,
  //     month: this.months[month]
  //   })
  //   }

  render() {

    // console.log(this.props.beginDate);
    let newSheet;
    let addMore;
    let content;
    let serviceItems;
    if (this.state.dateArray !== null) {
      serviceItems = this.state.dateArray.map((s, i) => {
        return <Picker.Item key={i} value={s} label={s} />
      });
    }
    if (this.props.sheetType === "newSheet") {



      newSheet = (
        <View>
          <Text>Date</Text>
          <Picker
            selectedValue={this.state.date}
            style={{ height: 50, width: '100%' }}
            onValueChange={(itemValue, itemIndex) => {
              const dateSlice = itemValue.slice(8, 10)
              const month = itemValue.slice(5, 7)
              this.setState({
                date: itemValue, dateNum: dateSlice,
                month: this.months[month]
              })
            }
            }>
            {serviceItems}
          </Picker>
        </View>
      )
    }
    return (
      <View style={{ padding: 20 }}>
        <View>
          <Text>Customer</Text>
          <Picker
            selectedValue={this.state.customer}
            style={{ height: 50, width: '100%' }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ customer: itemValue })
            }>
            <Picker.Item label="calsoft" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <View>
          <Text>Project</Text>
          <Picker
            selectedValue={this.state.project}
            style={{ height: 50, width: '100%' }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ project: itemValue })
            }>
            <Picker.Item label="sales" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <View >
          <Text>Task</Text>
          <Picker
            selectedValue={this.state.task}
            style={{ height: 50, width: '100%' }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ task: itemValue })
            }>
            <Picker.Item label="money" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <View >
          <Text>Hours</Text>
          <TextInput placeholder='Enter Hours' onChangeText={text =>
            this.setState({ hours: text })
          } ></TextInput>
        </View>
        <View>
          <Text>Company</Text>
          <Picker
            selectedValue={this.state.company}
            style={{ height: 50, width: '100%' }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ company: itemValue })
            }>
            <Picker.Item label="salesforce" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <View>{newSheet}</View>
        <View style={{ marginTop: 10 }}>
          <Button onPress={this.onClickhandler} title='Save and Continue' />
        </View>
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  submitSheet
}, dispatch)
export default connect(null, mapDispatchToProps)(ModalScreen)