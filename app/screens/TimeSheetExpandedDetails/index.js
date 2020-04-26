import React, { Component } from "react";
import { Text,Dimensions, View, TouchableOpacity,SafeAreaView, FlatList } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import AsyncStorage from '@react-native-community/async-storage';
import Details from '../../components/Details';
import { connect } from 'react-redux';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { bindActionCreators } from 'redux';
import fetchSheets from '../../services/api/fetchSheets'
// import styles from "../../components/Details/styles";
class TimeSheetExpandedDetails extends Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.timesheet.map(async(item,index)=>{
      await this.countHours(item,index)
     })
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
     isDatePickerVisible: false
   })

   
   
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

  index = {
    "mondayIndex":"",
    "tuesdayIndex":"",
    "wednesdayIndex":"",
    "thursdayIndex":"",
    "fridayIndex":"",
    "saturdayIndex":"",
    "sundayIndex":"",
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
    sundayIndex:null,
    isDatePickerVisible:false,
    // selected: (new Map([String],[Boolean]))
    // setDatePickerVisibility:false
    // isLoading: false
  };

  color = (value) => {
      if(value>=8){
        return "#228B22"
      }else if(value>0) {
        return "#800000"
      }else {
        return "Grey"
      }
  }

  countHours =async (data,index) => {

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
    if(this.index["mondayIndex"]===""){
      return;
    }else{
      let randomIndex = Number(this.index["mondayIndex"]);
    this.flatListRef.scrollToIndex({animated: true, index: randomIndex});
    }
    
  }

  scrollToIndexTue = () => {
    if(this.index["tuesdayIndex"]===""){
      return;
    }else{
      let randomIndex = Number(this.index["tuesdayIndex"]);
    this.flatListRef.scrollToIndex({animated: true, index: randomIndex});
    }
    
  }

  scrollToIndexWed = () => {
    if(this.index["wednesdayIndex"]===""){
      return;
    }else{
      let randomIndex = Number(this.index["wednesdayIndex"]);
    this.flatListRef.scrollToIndex({animated: true, index: randomIndex});
    }
    
  }

  scrollToIndexThur = () => {
    if(this.index["thursdayIndex"]===""){
      return;
    }else{
      let randomIndex = Number(this.index["thursdayIndex"]);
    this.flatListRef.scrollToIndex({animated: true, index: randomIndex});
    }
    
  }

  scrollToIndexFri = () => {
    if(this.index["fridayIndex"]===""){
      return;
    }else{
      let randomIndex = Number(this.index["fridayIndex"]);
    this.flatListRef.scrollToIndex({animated: true, index: randomIndex});
    }
    
  }

  scrollToIndexSat = () => {
    if(this.index["saturdayIndex"]===""){
      return;
    }else{
      let randomIndex = Number(this.index["saturdayIndex"]);
    this.flatListRef.scrollToIndex({animated: true, index: randomIndex});
    }
    
  }

  scrollToIndexSun = () => {
    if(this.index["sundayIndex"]===""){
        return;
    }else{
      let randomIndex = Number(this.index["sundayIndex"]);
      this.flatListRef.scrollToIndex({animated: true, index: randomIndex});
    }
    
  }

 

  showDatePicker = async (selected) => {

    if(selected==="Begin"){
     await this.setState({check: "Begin",isDatePickerVisible: true})
    }
    
  };

  hideDatePicker = () => {
    this.setState({isDatePickerVisible: false});
  };

  handleConfirm =  async (date) => {
    if(this.state.check==="Begin"){
      var checkDay = date.getDay()
      
      
     
      
      
      if(checkDay==1){
         this.setState({
          beginYear: date.getFullYear(),
          beginMonth: date.getMonth(),
          beginDate: date.getDate(),
          endDate: date.getDate(date.setDate(date.getDate() + 6)),
          endYear: date.getFullYear(date.setDate(date.getDate() + 6)),
          endMonth: date.getMonth(date.setDate(date.getDate() + 6))
        })
        await AsyncStorage.setItem('@BeginDate', JSON.stringify(this.state.beginDate));
        await AsyncStorage.setItem('@BeginMonth',JSON.stringify(this.state.beginMonth));
        await AsyncStorage.setItem('@BeginYear', JSON.stringify( this.state.beginYear));


        await AsyncStorage.setItem('@EndDate',JSON.stringify( this.state.endDate) )
        await AsyncStorage.setItem('@EndMonth', JSON.stringify (this.state.endMonth) )
        await AsyncStorage.setItem('@EndYear',JSON.stringify( this.state.endYear) )
        
    
      }else{
        alert("Select date correspond to Monday")
      }
    }
   
  
  this.setState({isDatePickerVisible: false});
  };
   
  // _onPressItem = (id) => {
  //   // updater functions are preferred for transactional updates
  //   this.setState((state) => {
  //     // copy the map rather than modifying state.
  //     const selected = new Map(state.selected);
  //     selected.set(id, !selected.get(id)); // toggle
  //     return {selected};
  //   });
  // };
 

  render() {
    
    let content;
    content = (
      
      <SafeAreaView>
          <View style={{ flexDirection: "row", borderWidth: 1,borderRadius: 10, borderColor: 'grey', marginLeft: 10, marginRight: 10, marginTop: 10 }}>
            <View style={{ width: '50%', padding: 15 ,borderRightWidth:1}}>
              <TouchableOpacity onPress={()=> {this.showDatePicker("Begin")}}>
              <Text>Begin Date</Text>
              <Text style={{fontSize:25,fontWeight:"900"}}>{this.state.beginDate+" "+this.months[this.state.beginMonth]}</Text>
              <Text style={{textAlign:"right",width:80}}>{this.state.beginYear}</Text>
              </TouchableOpacity>
              <DateTimePickerModal
           isVisible={this.state.isDatePickerVisible}
            mode="date"
            onConfirm={this.handleConfirm}
            onCancel={this.hideDatePicker}
        />
           
            </View>
            <View style={{ width: '50%', padding: 15 }}>
              
              <Text style={{marginLeft:40}}>End Date</Text>
              <Text style={{marginLeft:40,fontSize:25,fontWeight:"900"}}>{this.state.endDate+" "+this.months[this.state.endMonth]}</Text>
              <Text style={{marginLeft:40,textAlign:"right",width:80}}>{this.state.endYear}</Text>
         
              
             
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
                
                  percent={((this.state.sundayHours)/8)*100}
                  radius={20}
                  borderWidth={4}
                  color={this.color(Number(this.state.sundayHours))}
                  shadowColor="#999"
                  bgColor="#fff"
                >
                  {/* <Text style={{ fontSize: 11 }}>{this.state.sundayHours}</Text> */}
                  <Text style={{ fontSize: 11 }}>{this.hours["sunday"]}</Text>
                 
                </ProgressCircle>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.scrollToIndexMon}>
                <ProgressCircle
                  percent={((this.state.mondayHours)/8)*100}
                  radius={20}
                  borderWidth={4}
                  color={this.color(Number(this.state.mondayHours))}
                  shadowColor="#999"
                  bgColor="#fff"

                >
                  <Text style={{ fontSize: 11 }}>{this.state.mondayHours}</Text>
                </ProgressCircle>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.scrollToIndexTue}>
                <ProgressCircle
                  percent={((this.state.tuesdayHours)/8)*100}
                  radius={20}
                  borderWidth={4}
                  color={this.color(Number(this.state.tuesdayHours))}
                  shadowColor="#999"
                  bgColor="#fff"
                >
                  <Text style={{ fontSize: 11 }}>{this.state.tuesdayHours}</Text>
                </ProgressCircle>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.scrollToIndexWed}>
                <ProgressCircle
                  percent={((this.state.wednesdayHours)/8)*100}
                  radius={20}
                  borderWidth={4}
                  color={this.color(Number(this.state.wednesdayHours))}
                  
                  shadowColor="#999"
                  bgColor="#ffff"
                >
                 
                  <Text style={{ fontSize: 11 }}>{this.state.wednesdayHours}</Text>
                </ProgressCircle>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.scrollToIndexThur}>
                <ProgressCircle
                  percent={((this.state.thursdayHours)/8)*100}
                  radius={20}
                  borderWidth={4}
                  color={this.color(Number(this.state.thursdayHours))}
                  shadowColor="#999"
                  bgColor="#fff"
                >
                  <Text style={{ fontSize: 11 }}>{this.state.thursdayHours}</Text>
                </ProgressCircle>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.scrollToIndexFri}>
                <ProgressCircle
                  percent={((this.state.fridayHours)/8)*100}
                  radius={20}
                  borderWidth={4}
                  color={this.color(Number(this.state.fridayHours))}
                  shadowColor="#999"
                  bgColor="#fff"
                >
                  <Text style={{ fontSize: 11 }}>{this.state.fridayHours}</Text>
                </ProgressCircle>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.scrollToIndexSat}>
                <ProgressCircle
                  percent={((this.state.saturdayHours)/8)*100}
                  radius={20}
                  borderWidth={4}
                  color={this.color(Number(this.state.saturdayHours))}
                  shadowColor="#999"
                  bgColor="#fff"
                >
                  <Text style={{ fontSize: 11 }}>{this.state.saturdayHours}</Text>
                </ProgressCircle>
              </TouchableOpacity>
              </View>
              
            </View>
            {/* <Image style={{top:400,right:10,left:120}} source={require('../../assets/icons/Edit.png')} /> */}
         
       
        <FlatList 
        getItemLayout={this.getItemLayout}
        ref={(ref) => { this.flatListRef = ref; }}
        contentContainerStyle={{ paddingBottom: 630,flexDirection:"column"}}
       style={{ paddingRight: 10,paddingLeft:10, marginTop: 10 }}
        data={this.props.timesheet}
        extraData={this.state}
        renderItem=  { ({item,index}) =>  (
             <Details
              key={index}
              data={item}
              // onPressItem={this._onPressItem}
              // selected={!!this.state.selected.get(item.id)}
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