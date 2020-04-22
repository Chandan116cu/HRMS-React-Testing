import { StyleSheet, Dimensions } from 'react-native';
var width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    type : {
        flexGrow: 1,
        backgroundColor:"#E5E5E5",
        borderColor: "#B1B1B1",
        borderTopWidth : 2,
        borderRightWidth : 2,
        borderLeftWidth : 2,
        height : 30,
        width : width/2,
        borderBottomWidth : 2,
        marginLeft: 15,
        marginRight: 5,
        overflow : "hidden",
        borderTopLeftRadius: 5,
    },
    statusText:{
        textAlign:"center",
    },
    status : {
        flexGrow: 1,
        // backgroundColor:"#E5E5E5",
        borderColor: "#B1B1B1",
        borderTopWidth : 2,
        borderRightWidth : 2,
        height : 30,
        width : (width/2)-30,
        borderBottomWidth : 2,
        marginStart: -5,
        marginEnd : 10,
        overflow: "hidden",
        borderTopRightRadius : 5,
    },
    details : {
        flexGrow: 1,
        backgroundColor:"#EEEEEE",
        borderColor: "#B1B1B1",
        borderRightWidth : 2,
        borderLeftWidth : 2,
        height : 100,
        borderBottomWidth : 2,
        marginLeft: 15,
        marginRight: 15,
        overflow : "hidden",
        borderBottomLeftRadius : 5,
        borderBottomRightRadius : 5,
        // flexDirection : "row"
    },
    layout : {
        flexGrow: 1,
        flexDirection: "row",
    },
    typeContent : {
        textAlign : "center"
    },
    statusContent : {
        textAlign : "center"
    },
    from : {
        marginLeft : width/6,
        marginTop : 25,
        overflow : "hidden",
        flexDirection : "row"
    },
    to : {
        marginLeft : width/6,
        marginTop : 10,
        overflow : "hidden",
        flexDirection : "row"
    },
    expanded : {
        borderColor: "#B1B1B1",
        borderRightWidth : 2,
        borderLeftWidth : 2,
        height : 100,
        borderBottomWidth : 2,
        marginLeft: 15,
        marginRight: 15,
        overflow : "hidden",
        borderBottomLeftRadius : 5,
        borderBottomRightRadius : 5,
        flexDirection : "row"
    },
    fromText: {
     paddingLeft: 20,
     fontSize: 15,
    },
    toText: {
        paddingLeft: 35,
        fontSize: 15,
    },
    container:{
        paddingTop:20,
        paddingBottom:20,
    }
});

export default styles;