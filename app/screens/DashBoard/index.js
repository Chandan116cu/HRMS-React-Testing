import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import TimeSheet from '../../components/TimeSheetDetails'
import { LayoutRoot } from 'react-native-navigation'

class DashBoard extends Component {
    render() {
        let content;
        content = (this.props.timesheetss.map((payload, index) => (
            <TimeSheet
                key={index}
                data={payload}
                {...this.props} />
        )))
        return (
            <View>
                <ScrollView>
                    <View>{content}</View>
                    {/* <LayoutRoot/> */}
                </ScrollView>
            </View>
        )
    }
}
mapStateToProps = (state) => {
    const { timeSheets } = state
    return { timesheetss: timeSheets.payload }
}

export default connect(mapStateToProps)(DashBoard)