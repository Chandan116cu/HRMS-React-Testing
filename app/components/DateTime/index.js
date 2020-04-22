import React, { Component } from "react";
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { Navigation }  from 'react-native-navigation'
import TimeSheetExpand from '../TimeSheetExpand'
// import push  from '../../services/Navigation/Navigation'
// import TimeSheetExpand from '../TimeSheetExpand'

export default class TimeSheet extends Component {
  constructor(props) {
    super(props);
  }
  static options() {
    return {
      topBar: {
        title: {
          text: 'Shared Element Transition',
          fontFamily: 'HelveticaNeue-Italic'
        },
        backButton: {
          transition: 'custom'
        },
        largeTitle: {
          visible: false
        }
      },
      animations: {
        pop: {
          content: {
            alpha: {
              from: 1,
              to: 0,
              duration: 250
            }
          }
        }
      }
    };
  }
  state = {
    viewDetail: "short",
    status: "",
    title : "TimeSheetDetail",
    response: []
  };

   onClickHandler = () => {
    Navigation.push(this.props.componentId, {
        component: {
          name: 'TimeSheetExpandedDetails',
          passProps: {
            response: this.state.response
          },
           options: {
            topBar: {
              title: {
                text: "TimeSheet Details"
              }
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
