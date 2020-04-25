import React, { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView, SafeAreaView, Alert, Modal, TextInput, Button, ActivityIndicator, ProgressBarAndroid, SectionList, FlatList } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import Details from '../../components/Details';
import thunk from "redux-thunk";
import { connect } from 'react-redux';
import { Navigation } from "react-native-navigation"
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { bindActionCreators } from 'redux';
import fetchSheets from '../../services/api/fetchSheets'
import {Loading} from '../../modules/actions/days'

// import styles from "../../components/Details/styles";
class TimeSheetExpandedDetails extends Component {

  constructor(props) {
    super(props);

  }
  
  componentDidMount() {
    // let data = {
    //   day: null,
    //   from: this.props.from,
    //   to: this.props.to,
    // }
    // this.props.fetchSheets(data)
   this.setState({
     mondayHours : this.hours["monday"],
     tuesdayHours : this.hours["tuesday"],
     wednesdayHours : this.hours["wednesday"],
     thursdayHours: this.hours["thursday"],
     fridayHours : this.hours["friday"],
     saturdayHours : this.hours["saturday"],
     sundayHours : this.hours["sunday"],
     mondayIndex:this.index["mondayIndex"],
    tuesdayIndex:this.index["tuesdayIndex"],
    wednesdayIndex:this.index["wednesdayIndex"],
    thursdayIndex:this.index["thursdayIndex"],
    fridayIndex:this.index["fridayIndex"],
    saturdayIndex:this.index["saturdayIndex"],
    sundayIndex:this.index["sundayIndex"]
   })
   
  }

  componentWillMount() {
    
  }


  ListAsPerDay =  (day) => {

    let data = {
      day: day,
      from: this.props.from,
      to: this.props.to,
    }
 
    this.props.fetchSheets(data)
  
  }

  scrollToWednesday = () => {
   
  }

   Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title.customer}</Text>
      <Text style={{fontSize:20}}>{title.hours}</Text>
      <Text style={{fontSize:20}}>{title.company}</Text>
    </View>
  );

  index = {
    "mondayIndex":"",
    "tuesdayIndex":"",
    "wednesdayIndex":"",
    "thursdayIndex":"",
    "fridayIndex":"",
    "saturdayIndex":"",
    "sundayIndex":""
  }
 
  hours = {
    "monday":"",
    "tuesday":"",
    "wednesday":"",
    "thursday":"",
    "friday":"",
    "saturday":"",
    "sunday":""
  }

  months = {
    "0":"Jan",
    "1":"Feb",
    "2":"Mar",
    "3":"Apr",
    "4":"May",
    "5":"Jun",
    "6":"Jul",
    "7":"Aug",
    "8":"Sep",
    "9":"Oct",
    "10":"Nov",
    "11":"Dec",
  }

  
  state = {
    showSheet: true,
    day: "Monday",
    timesheetToRender: this.props.timesheet,
    isLoading: false,
    beginDate: new Date().getDate(),
    beginMonth: new Date().getMonth(),
    beginYear: new Date().getFullYear(),
    endDate: new Date().getDate(),
    endMonth: new Date().getMonth(),
    endYear: new Date().getFullYear(),
    mondayHours: null,
    tuesdayHours: null,
    wednesdayHours: null,
    thursdayHours: null,
    fridayHours: null,
    saturdayHours: null,
    sundayHours: null,
    mondayIndex:null,
    tuesdayIndex:null,
    wednesdayIndex:null,
    thursdayIndex:null,
    fridayIndex:null,
    saturdayIndex:null,
    sundayIndex:null
    // isLoading: false
  };



  countHours = (data,index) => {
    if(data.day=="monday"){
     
          if(this.index["mondayIndex"]===""){
            this.index["mondayIndex"] = index;
          }
          this.hours[data.day] = Number(this.hours[data.day]) + Number(data.hours);        
    }else if(data.day==="tuesday"){
      if(this.index["tuesdayIndex"]===""){
        this.index["tuesdayIndex"] = index;
      }    
      this.hours[data.day] = Number(this.hours[data.day]) + Number(data.hours);
    }else if(data.day==="wednesday"){

      if(this.index["wednesdayIndex"]===""){
        this.index["wednesdayIndex"] = index;
      } 
      this.hours[data.day] = Number(this.hours[data.day]) + Number(data.hours);
    }else if(data.day==="thursday"){
      if(this.index["thursdayIndex"]===""){
        this.index["thursdayIndex"] = index;
      } 
      this.hours[data.day] = Number(this.hours[data.day]) + Number(data.hours);
    }else if(data.day==="friday"){
      if(this.index["fridayIndex"]===""){
        this.index["fridayIndex"] = index;
      } 
      this.hours[data.day] = Number(this.hours[data.day]) + Number(data.hours);
    }else if(data.day==="saturday"){
      if(this.index["saturdayIndex"]===""){
        this.index["saturdayIndex"] = index;
      } 
      this.hours[data.day] = Number(this.hours[data.day]) + Number(data.hours);
    }else if(data.day==="sunday"){
      if(this.index["sundayIndex"]===""){
        this.index["sundayIndex"] = index;
      } 
      this.hours[data.day] = Number(this.hours[data.day]) + Number(data.hours);
    }
  }

  getItemLayout = (data, index) => (
    { length: 50, offset: 241 * index, index }
  )

  scrollToIndexMon = () => {
    let randomIndex = Number(this.index["mondayIndex"]);
    this.flatListRef.scrollToIndex({animated: true, index: randomIndex});
  }

  scrollToIndexTue = () => {
    let randomIndex = Number(this.index["tuesdayIndex"]);
    this.flatListRef.scrollToIndex({animated: true, index: randomIndex});
  }

  scrollToIndexWed = () => {
    let randomIndex = Number(this.index["wednesdayIndex"]);
    this.flatListRef.scrollToIndex({animated: true, index: randomIndex});
  }

  scrollToIndexThur = () => {
    let randomIndex = Number(this.index["thursdayIndex"]);
    this.flatListRef.scrollToIndex({animated: true, index: randomIndex});
  }

  scrollToIndexFri = () => {
    let randomIndex = Number(this.index["fridayIndex"]);
    this.flatListRef.scrollToIndex({animated: true, index: randomIndex});
  }

  scrollToIndexSat = () => {
    let randomIndex = Number(this.index["saturdayIndex"]);
    this.flatListRef.scrollToIndex({animated: true, index: randomIndex});
  }

  scrollToIndexSun = () => {
    let randomIndex = Number(this.index["sundayIndex"]);
    this.flatListRef.scrollToIndex({animated: true, index: randomIndex});
  }


  render() {
    
    let content;
    let contentToShow;
    if (this.state.showSheet === true && this.props.loading===false) {
      contentToShow = (
       this.props.timesheet.map((payload, index) => (

          this.countHours(payload,index),
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
              <Text style={{fontSize:25,fontWeight:"900"}}>{this.state.beginDate+" "+this.months[this.state.beginMonth]}</Text>
              <Text style={{textAlign:"right",width:80}}>{this.state.beginYear}</Text>
            
            </View>
            <View style={{ width: '50%', padding: 15 }}>
              <Text style={{marginLeft:25}}>End Date</Text>
              <Text style={{marginLeft:25,fontSize:25,fontWeight:"900"}}>{this.state.endDate+" "+this.months[this.state.endMonth]}</Text>
              <Text style={{marginLeft:25,textAlign:"right",width:80}}>{this.state.endYear}</Text>
            
            </View>
          </View>
         
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
              <TouchableOpacity onPress={this.scrollToIndexSun}>
                <ProgressCircle
                  percent={((this.state.sundayHours/2)/8)*100}
                  radius={20}
                  borderWidth={4}
                  color="#228B22"
                  shadowColor="#999"
                  bgColor="#fff"
                >
                  <Text style={{ fontSize: 11 }}>{this.state.sundayHours/2}</Text>
                </ProgressCircle>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.scrollToIndexMon}>
                <ProgressCircle
                  percent={((this.state.mondayHours/2)/8)*100}
                  radius={20}
                  borderWidth={4}
                  color="#228B22"
                  shadowColor="#999"
                  bgColor="#fff"

                >
                  <Text style={{ fontSize: 11 }}>{this.state.mondayHours/2}</Text>
                </ProgressCircle>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.scrollToIndexTue}>
                <ProgressCircle
                  percent={((this.state.tuesdayHours/2)/8)*100}
                  radius={20}
                  borderWidth={4}
                  color="#228B22"
                  shadowColor="#999"
                  bgColor="#fff"
                >
                  <Text style={{ fontSize: 11 }}>{this.state.tuesdayHours/2}</Text>
                </ProgressCircle>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.scrollToIndexWed}>
                <ProgressCircle
                  percent={((this.state.wednesdayHours/2)/8)*100}
                  radius={20}
                  borderWidth={4}
                  color="#228B22"
                  shadowColor="#999"
                  bgColor="#fff"
                >
                  <Text style={{ fontSize: 11 }}>{this.state.wednesdayHours/2}</Text>
                </ProgressCircle>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.scrollToIndexThur}>
                <ProgressCircle
                  percent={((this.state.thursdayHours/2)/8)*100}
                  radius={20}
                  borderWidth={4}
                  color="#228B22"
                  shadowColor="#999"
                  bgColor="#fff"
                >
                  <Text style={{ fontSize: 11 }}>{this.state.thursdayHours/2}</Text>
                </ProgressCircle>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.scrollToIndexFri}>
                <ProgressCircle
                  percent={((this.state.fridayHours/2)/8)*100}
                  radius={20}
                  borderWidth={4}
                  color="#228B22"
                  shadowColor="#999"
                  bgColor="#fff"
                >
                  <Text style={{ fontSize: 11 }}>{this.state.fridayHours/2}</Text>
                </ProgressCircle>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.scrollToIndexSat}>
                <ProgressCircle
                  percent={((this.state.saturdayHours/2)/8)*100}
                  radius={20}
                  borderWidth={4}
                  color="#228B22"
                  shadowColor="#999"
                  bgColor="#fff"
                >
                  <Text style={{ fontSize: 11 }}>{this.state.saturdayHours/2}</Text>
                </ProgressCircle>
              </TouchableOpacity>
              </View>

           

            
            </View>
            
       
            {/* <ScrollView scrollToOverflowEnabled={true} ref={ref => {
            this.scrollview_ref = ref;
          }} style={{padding:0, margin:0}}>
            
            <View style={{ paddingRight: 10,paddingLeft:10,paddingBottom:0,paddingTop:0, marginTop: 10, marginBottom: 200 }}>{contentToShow}</View>
        </ScrollView> */}
        <FlatList 
        getItemLayout={this.getItemLayout}
        ref={(ref) => { this.flatListRef = ref; }}
        
        contentContainerStyle={{ paddingBottom: 450,flexDirection:"column"}}
       style={{ paddingRight: 10,paddingLeft:10, marginTop: 10 }}
        data={this.props.timesheet}
        renderItem=  {({item,index}) => (
          this.countHours(item,index),
             <Details
              key={index}
              data={item}
              {...this.props} />
        )}
       
        keyExtractor={item => item.empId}>

        </FlatList>

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