import { Card } from 'react-native-shadow-cards';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import { Card, CardItem} from "react-native-simple-card-view";
import ProgressCircle from 'react-native-progress-circle';
import styles from './styles';

export default class TimeSheetCount extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card style={{width:'90%',height:150,padding:15}}>
          <View style={styles.progress}>
            <ProgressCircle
              percent={30}
              radius={50}
              borderWidth={8}
              color="#3399FF"
              shadowColor="#999"
              bgColor="#fff"
            >
              <Text style={{ fontSize: 18 }}>{'30%'}</Text>
            </ProgressCircle>
            <ProgressCircle
              percent={30}
              radius={50}
              borderWidth={8}
              color="#3399FF"
              shadowColor="#999"
              bgColor="#fff"
            >
              <Text style={{ fontSize: 18 }}>{'30%'}</Text>
            </ProgressCircle>
            <ProgressCircle
              percent={30}
              radius={50}
              borderWidth={8}
              color="#3399FF"
              shadowColor="#999"
              bgColor="#fff"
            >
              <Text style={{ fontSize: 18 }}>{'30%'}</Text>
            </ProgressCircle>
          </View>
          <View style={styles.textcontainer}>
          <Text >Pending</Text>
          <Text>Approved</Text>
          <Text>Balance</Text>
          </View>
        </Card>
      </View>
    );

  }
}
