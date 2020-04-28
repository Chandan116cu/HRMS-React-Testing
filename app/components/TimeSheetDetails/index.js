import React, { Component } from "react";
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { Navigation }  from 'react-native-navigation'

export default class TimeSheet extends Component {
  constructor(props) {
    super(props);
  }
  
  state = {
    viewDetail: "short",
    status: "",
    title : "TimeSheetDetail",
    response: [],
    from: this.props.data.from ,
    to: this.props.data.to ,
  };

   onClickHandler = () => {
    Navigation.push(this.props.componentId, {
        component: {
          // swipeToDismiss: true,
          name: 'AddTimeSheet',
          passProps: {
            response: null,
            from: this.state.from,
            to: this.state.to
          },
           options: {
          //   animations: {
          //     pop: {
          //         content: {
          //             alpha: {
          //                 from: 1,
          //                 to: 0,
          //                 duration: 300,
          //                 startDelay: 0,
          //                 interpolation: 'decelerate',
          //             },
          //         },
          //     },
          //     push: {
          //         waitForRender: true,
          //         content: {
          //             alpha: {
          //                 from: 0,
          //                 to: 1,
          //                 duration: 300,
          //                 startDelay: 0,
          //                 interpolation: 'accelerate',
          //             },
          //             // scaleX: {
          //             //   from: 0,
          //             //   to: 1,
          //             //   duration: 300,
          //             //   interpolation: "accelerate",
          //             // },
          //           //   x: {
          //           //     from: 1,
          //           //     to: 0,
          //           //     duration: 300,
          //           //     startDelay: 0,
          //           //     interpolation: 'accelerate',
          //           // },
          //         },
          //     },
          // },
            topBar: {
              title: {
                text: "Add Timesheet ",
                alignment:"center"
              },
              
            }
          }
        } 
      });
  }

  render() {
        return(
            <View style={styles.container}>
          <ScrollView>
          <View style={{flexDirection:"row"}}>
              <View style={styles.type}><Text style={styles.typeContent}>Timesheet</Text></View>
        <View style={styles.status}><Text style={styles.statusText}>{this.props.data.status}</Text></View>
          </View>
          <TouchableOpacity onPress={this.onClickHandler}>
         
          <View>
              
              <View style={styles.details}>
                  <View style={styles.from}>
                      <Text>From</Text>
                      <Text style={styles.fromText}>{this.props.data.from}</Text>
                  </View>
                  <View style={styles.to}>
                      <Text>To</Text>
                      <Text style={styles.toText}>{this.props.data.to}</Text>
                  </View>
              </View>
          </View>
        </TouchableOpacity>
          </ScrollView>
        
      </View>
        );
  }
}
