import { StyleSheet, Dimensions } from 'react-native';
var width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    detail : {
        margin: 5,
        borderColor: "#B1B1B1",
        borderTopWidth : 1,
        borderBottomWidth:1,
        borderLeftWidth:1,
        borderRightWidth:1,
        backgroundColor:"#e6e6e6",
        borderTopLeftRadius : 5,
         borderTopRightRadius : 5,
         borderBottomLeftRadius : 5,
         borderBottomRightRadius : 5,
        flexDirection : "row"

    },
    boundary : {
        borderTopWidth: 1,
        borderColor: "#B0B0B0",
    },
    PlusIcon : {
        width: 20,
        height: 20,
        // margin:10,
    },
    textColor : {
        color: "#808080",
        fontSize: 18,
        paddingRight:"11%",
        alignItems:"flex-start",
        justifyContent:"space-around"
    },
    headingColor :{
        color: "#000080",
        fontSize: 15,
        paddingRight:"14%",
        paddingLeft:"2%",
        flexWrap:"wrap",
        alignItems:"flex-start",
        flexDirection:"row",
        justifyContent:"space-around"
    }
});

export default styles;