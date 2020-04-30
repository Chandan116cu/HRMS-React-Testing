import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import TimeSheet from '../../components/TimeSheetDetails'
import { LayoutRoot } from 'react-native-navigation'
const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height


import { Navigation } from 'react-native-navigation'




export default class DashBoard extends Component {

    openAddTimeSheet = () => {
      
        Navigation.push(this.props.componentId, {
          component: {
            name: 'AddTimeSheet',
            passProps: {
            },
            options: {
              topBar: {
                title: {
                  text: 'Add Timesheet',
                  alignment: 'center'
                }
              }
            }
          }
        });
      }

      openMySubmissions = () => {
      
        Navigation.push(this.props.componentId, {
          component: {
            name: 'MySubmissions',
            passProps: {
            },
            options: {
              topBar: {
                title: {
                  text: 'My Submissions',
                  alignment: 'center'
                }
              }
            }
          }
        });
      }

      

    render() {
        let content;
        // content = (this.props.timesheetss.map((payload, index) => (
        //     <TimeSheet
        //         key={index}
        //         data={payload}
        //         {...this.props} />
        // )))
        return (
            <View style={{flexDirection:"column",flex:1}}>
                <View style={{flexDirection:"row"}}>
                    <View style={{width:(deviceWidth/2),height:(deviceHeight/2),borderWidth:1,justifyContent:"center",alignContent:"center",alignItems:"center"}} >
                        <TouchableOpacity onPress={this.openAddTimeSheet}>
                            <Image style={{ width: 150, height: 150  }} source={require('../../assets/icons/leaveRequest.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{width:(deviceWidth/2),height:(deviceHeight/2),borderWidth:1,justifyContent:"center",alignContent:"center",alignItems:"center"}} >
                        <TouchableOpacity onPress={this.openMySubmissions}>
                            <Image style={{ width: 150, height: 150  }} source={require('../../assets/icons/holidayIcon.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View style={{width:(deviceWidth/2),height:(deviceHeight/2),borderWidth:1,justifyContent:"center",alignContent:"center",alignItems:"center"}} >
                        <TouchableOpacity>
                            <Image style={{ width: 150, height: 150  }} source={require('../../assets/icons/approval.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{width:(deviceWidth/2),height:(deviceHeight/2),borderWidth:1,justifyContent:"center",alignContent:"center",alignItems:"center"}} >
                        <TouchableOpacity>
                            <Image style={{ width: 150, height: 150  }} source={require('../../assets/icons/home.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* 
                
                <View  style={{width:'50%',height:"50%"}}>
                <TouchableOpacity>
                <Image width={50} source={require('../../assets/icons/approval.png')}/>
                </TouchableOpacity>
                </View>
                <View  style={{width:'50%',height:"50%"}}>
                <TouchableOpacity>
                <Image source={require('../../assets/icons/leaveRequest.png')}/>
                </TouchableOpacity>
                </View> */}
            </View>
        )
    }
}
// mapStateToProps = (state) => {
//     const { timeSheets } = state
//     return { timesheetss: timeSheets.payload }
// }

// export default connect(mapStateToProps)(DashBoard)