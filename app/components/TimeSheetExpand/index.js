import React, { Component } from "react";
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";

export default class TimeSheetExpand extends Component {
  
  render() {
        return(
            <TouchableOpacity>
                <View style={styles.expanded}>
                  <View style={styles.day}>
                      <Text>{this.props.day} Hello</Text>
                  </View>
                  <View style={styles.date}>
                      <Text>{this.props.date}</Text>
                  </View>
              </View>
            </TouchableOpacity>
                
            
        );
  }
}
