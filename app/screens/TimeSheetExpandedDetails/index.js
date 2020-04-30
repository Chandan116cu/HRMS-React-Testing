import React, { Component } from "react";
import { Text, Dimensions, View, TouchableOpacity, SafeAreaView, FlatList, ScrollView, Button } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

import Details from '../../components/Details';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import fetchSheets from '../../services/api/fetchSheets'
import submitTimesheet from '../../services/api/submitSheet'
import AsyncStorage from "@react-native-community/async-storage";
import moment from "moment";
// import styles from "../../components/Details/styles";
export default class TimeSheetExpandedDetails extends Component {

  constructor(props) {
    super(props);

  }



  componentDidMount() {
    if (this.props.timesheet !== null) {
      this.props.timesheet.map((item, index) => {
        this.countHours(item, index)
      })
      this.setState({
        mondayHours: this.hours["monday"],
        tuesdayHours: this.hours["tuesday"],
        wednesdayHours: this.hours["wednesday"],
        thursdayHours: this.hours["thursday"],
        fridayHours: this.hours["friday"],
        saturdayHours: this.hours["saturday"],
        sundayHours: this.hours["sunday"],
        isDatePickerVisible: false
      })
    } else if (this.props.timesheet === null) {
      // this.collectData();
    }




  }


  getData = async () => {
    try {
      const data = await AsyncStorage.getItem('@timesheet')
      if (data !== null) {
        const newData = JSON.parse(data);
        this.props.submitTimesheet(newData);
      }
    } catch (e) {
      // error reading value
      console.log("Error in storage")
    }
  }


  async collectData() {

    this.getData;

  }

  index = {
    "mondayIndex": "",
    "tuesdayIndex": "",
    "wednesdayIndex": "",
    "thursdayIndex": "",
    "fridayIndex": "",
    "saturdayIndex": "",
    "sundayIndex": "",
  }

  hours = {
    "2": "",
    "3": "",
    "4": "",
    "5": "",
    "6": "",
    "0": "",
    "1": ""
  }




  state = {
    showSheet: true,
    day: "Monday",
    timesheetToRender: this.props.timesheet,
    isLoading: false,

    mondayHours: null,
    tuesdayHours: null,
    wednesdayHours: null,
    thursdayHours: null,
    fridayHours: null,
    saturdayHours: null,
    sundayHours: null,
    mondayIndex: null,
    tuesdayIndex: null,
    wednesdayIndex: null,
    thursdayIndex: null,
    fridayIndex: null,
    saturdayIndex: null,
    sundayIndex: null,
    isDatePickerVisible: false,
    refresh: false,
    dynamicIndex: 0

  };

  color = (value) => {
    if (value >= 8) {
      return "#228B22"
    } else if (value > 0) {
      return "#800000"
    } else {
      return "Grey"
    }
  }

  countHours = (data, index) => {
    // debugger
    const date = new Date(data.date);
    const day = date.getDay();

    if (day === 1) {

      if (this.index["mondayIndex"] === "") {
        this.index["mondayIndex"] = index;
      }
      this.hours[day] = Number(this.hours[day]) + Number(data.hours);
    } else if (day === 2) {
      if (this.index["tuesdayIndex"] === "") {
        this.index["tuesdayIndex"] = index;
      }


      this.hours[day] = Number(this.hours[day]) + Number(data.hours);
    } else if (day === 3) {

      if (this.index["wednesdayIndex"] === "") {
        this.index["wednesdayIndex"] = index;
      }
      this.hours[day] = Number(this.hours[day]) + Number(data.hours);
    } else if (day === 4) {
      if (this.index["thursdayIndex"] === "") {
        this.index["thursdayIndex"] = index;
      }
      this.hours[day] = Number(this.hours[day]) + Number(data.hours);
    } else if (day === 5) {
      if (this.index["fridayIndex"] === "") {
        this.index["fridayIndex"] = index;
      }
      this.hours[day] = Number(this.hours[day]) + Number(data.hours);
    } else if (day === 6) {
      if (this.index["saturdayIndex"] === "") {
        this.index["saturdayIndex"] = index;
      }
      this.hours[day] = Number(this.hours[day]) + Number(data.hours);
    } else if (day === 0) {
      if (this.index["sundayIndex"] === "") {
        this.index["sundayIndex"] = index;
      }
      this.hours[day] = Number(this.hours[day]) + Number(data.hours);
    }
  }

  getItemLayout = (data, index) => (
    { length: 50, offset: 241 * index, index }
  )

  scrollToIndexMon = () => {
    if (this.index["mondayIndex"] === "") {
      return;
    } else {
      let randomIndex = Number(this.index["mondayIndex"]);
      // this.flatListRef.scrollTo({ animated: true, index: randomIndex });
      this.scroller.scrollTo({
        x: 0,
        y: randomIndex * 242,
        animated: true
      });
    }

  }

  scrollToIndexTue = () => {
    if (this.index["tuesdayIndex"] === "") {
      return;
    } else {
      let randomIndex = Number(this.index["tuesdayIndex"]);
      // this.flatListRef.scrollTo({ animated: true, index: randomIndex });
      this.scroller.scrollTo({
        x: 0,
        y: randomIndex * 242,
        animated: true
      });
    }

  }

  scrollToIndexWed = () => {
    // console.log(this.index)
    debugger
    if (this.index["wednesdayIndex"] === "") {
      return;
    } else {

      let randomIndex = Number(this.index["wednesdayIndex"]);
      // console.log(this.arr)
      // console.log(this.arr[randomIndex])
      // this.flatListRef.scrollTo({ x: 0,
      //   y: this.arr[randomIndex], animated: true });
      this.scroller.scrollTo({
        x: 0,
        y: randomIndex * 242,
        animated: true
      });
    }

  }



  scrollToIndexThur = () => {
    if (this.index["thursdayIndex"] === "") {
      return;
    } else {
      let randomIndex = Number(this.index["thursdayIndex"]);
      // this.flatListRef.scrollTo({ animated: true, index: randomIndex });
      this.scroller.scrollTo({
        x: 0,
        y: randomIndex * 242,
        animated: true
      });
    }

  }

  scrollToIndexFri = () => {
    if (this.index["fridayIndex"] === "") {
      return;
    } else {
      let randomIndex = Number(this.index["fridayIndex"]);
      // this.flatListRef.scrollTo({ animated: true, index: randomIndex });
      this.scroller.scrollTo({
        x: 0,
        y: randomIndex * 242,
        animated: true
      });
    }

  }

  scrollToIndexSat = () => {
    if (this.index["saturdayIndex"] === "") {
      return;
    } else {
      let randomIndex = Number(this.index["saturdayIndex"]);
      // this.flatListRef.scrollTo({ animated: true, index: randomIndex });
      this.scroller.scrollTo({
        x: 0,
        y: randomIndex * 242,
        animated: true
      });
    }

  }

  scrollToIndexSun = () => {
    if (this.index["sundayIndex"] === "") {
      return;
    } else {
      let randomIndex = Number(this.index["sundayIndex"]);
      // this.flatListRef.scrollTo({ animated: true, index: randomIndex });
      this.scroller.scrollTo({
        x: 0,
        y: randomIndex * 242,
        animated: true
      });
    }

  }


  render() {

    let content;
    let list;
    let saveAsDraft;
    let saveButton;
    let contentToShow;
    this.hours["0"] = "";
    this.hours["1"] = "";
    this.hours["2"] = "";
    this.hours["3"] = "";
    this.hours["4"] = "";
    this.hours["5"] = "";
    this.hours["6"] = "";


    // debugger
    if (this.props.timesheet != null) {
      this.index["fridayIndex"] = "";
      this.index["mondayIndex"] = "";
      this.index["saturdayIndex"] = "";
      this.index["sundayIndex"] = "";
      this.index["thursdayIndex"] = "";
      this.index["tuesdayIndex"] = "";
      this.index["wednesdayIndex"] = "";

      // console.log(this.index)
      // this.props.timesheet.map(async (item, index) => {
      //   // debugger
        
      // })
      // this.countHours(payload, index),

      saveAsDraft = (

        <TouchableOpacity>
            <View>
              
            </View>
        </TouchableOpacity>
        
      )

      saveButton = (
        <Button title="Submit"></Button>
      )

      contentToShow = (
        this.props.timesheet.map((payload, index) => (
          this.countHours(payload, index),
          <Details           
            key={index}
            data={payload}
            {...this.props} />
        ))
      )


    } else if (this.props.timesheet === null) {
      console.log("data is null")
    }

    return (<View style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>


      <View style={{ flexDirection: "column", padding: 10, justifyContent: "space-evenly", borderRadius: 10, borderWidth: 1, marginTop: 10, borderColor: 'grey' }}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }} >
          <Text style={{ fontSize: 11 }}>S</Text>
          <Text style={{ fontSize: 11 }}>M</Text>

          <Text style={{ fontSize: 11 }}>T</Text>

          <Text style={{ fontSize: 11 }}>W</Text>
          <Text style={{ fontSize: 11 }}>T</Text>
          <Text style={{ fontSize: 11 }}>F</Text>
          <Text style={{ fontSize: 11 }}>S</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>

          <TouchableOpacity onPress={this.scrollToIndexSun}>
            <ProgressCircle

              percent={((this.hours["0"]) / 8) * 100}
              radius={20}
              borderWidth={4}
              color={this.color(Number(this.hours["0"]))}
              shadowColor="#999"
              bgColor="#fff"
            >
              <Text style={{ fontSize: 11 }}>{this.hours["0"]}</Text>
              {/* <Text style={{ fontSize: 11 }}>{this.hours["sunday"]}</Text> */}

            </ProgressCircle>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.scrollToIndexMon}>
            <ProgressCircle
              percent={((this.hours["1"]) / 8) * 100}
              radius={20}
              borderWidth={4}
              color={this.color(Number(this.hours["1"]))}
              shadowColor="#999"
              bgColor="#fff"

            >
              <Text style={{ fontSize: 11 }}>{this.hours["1"]}</Text>
            </ProgressCircle>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.scrollToIndexTue}>
            <ProgressCircle
              percent={((this.hours["2"]) / 8) * 100}
              radius={20}
              borderWidth={4}
              color={this.color(Number(this.hours["2"]))}
              shadowColor="#999"
              bgColor="#fff"
            >
              <Text style={{ fontSize: 11 }}>{this.hours["2"]}</Text>
            </ProgressCircle>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.scrollToIndexWed} >
            <ProgressCircle
              percent={((this.hours["3"]) / 8) * 100}
              radius={20}
              borderWidth={4}
              color={this.color(Number(this.hours["3"]))}

              shadowColor="#999"
              bgColor="#ffff"
            >

              <Text style={{ fontSize: 11 }}>{this.hours["3"]}</Text>
            </ProgressCircle>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.scrollToIndexThur}>
            <ProgressCircle
              percent={((this.hours["4"]) / 8) * 100}
              radius={20}
              borderWidth={4}
              color={this.color(Number(this.hours["4"]))}
              shadowColor="#999"
              bgColor="#fff"
            >
              <Text style={{ fontSize: 11 }}>{this.hours["4"]}</Text>
            </ProgressCircle>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.scrollToIndexFri}>
            <ProgressCircle
              percent={((this.hours["5"]) / 8) * 100}
              radius={20}
              borderWidth={4}
              color={this.color(Number(this.hours["5"]))}
              shadowColor="#999"
              bgColor="#fff"
            >
              <Text style={{ fontSize: 11 }}>{this.hours["5"]}</Text>
            </ProgressCircle>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.scrollToIndexSat}>
            <ProgressCircle
              percent={((this.hours["6"]) / 8) * 100}
              radius={20}
              borderWidth={4}
              color={this.color(Number(this.hours["6"]))}
              shadowColor="#999"
              bgColor="#fff"
            >
              <Text style={{ fontSize: 11 }}>{this.hours["6"]}</Text>
            </ProgressCircle>
          </TouchableOpacity>
        </View>

      </View>

      <ScrollView style={{ flex: 1, marginTop: 10 }} scrollToOverflowEnabled={true} ref={scroller => {
        this.scroller = scroller;
      }}
      >
        {contentToShow}
        
        {saveAsDraft}
        {saveButton}
        
        
        </ScrollView>
    </View>)
  }
}
