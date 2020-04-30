import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions,ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import TimeSheet from '../../components/TimeSheetDetails'

import { bindActionCreators } from 'redux';
import { LayoutRoot } from 'react-native-navigation'
import fetchSheets from '../../services/api/fetchSheets'

class MySubmissions extends Component {

constructor(props){
    super(props)
}

state = {
    loading : false
}

componentDidMount(){
    // if(list===null){
    //     this.setState([
    //         loading
    //     ])
    // }
    this.props.fetchSheets()
}


    render() {
        let content;
        if(this.props.isLoading===true){
            content = (
                <View style={{alignContent:"center",justifyContent:"center",alignItems:"center"}}>
                    <ActivityIndicator  size="large" color="#0000ff" />
                </View>
                
            )
        }else {
            content = (this.props.list.map((payload, index) => (
                <TimeSheet
                    key={index}
                    data={payload}
                    {...this.props} />
            )))
        }
        
        return <ScrollView >{content}</ScrollView>

    }
}

mapStateToProps = (state) => {
    const { timeSheetsList } = state
    return { list: timeSheetsList.data.data, isLoading: timeSheetsList.isLoading, statusCode: timeSheetsList.data.statusCode }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchSheets
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(MySubmissions)