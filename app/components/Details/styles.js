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
    submit:{
        marginRight:0,
        width:100,
        height:40,
        marginLeft:0,
        marginTop:20,
        paddingTop:5,
        paddingBottom:0,
        backgroundColor:'#228B22',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'

      },
      submitText:{
          color:'#fff',
          textAlign:'center',
      },
      cancel:{
        
        marginRight:0,
        width:100,
        height:40,
        marginLeft:0,
        marginTop:20,
        paddingTop:5,
        paddingBottom:0,
        backgroundColor:'#B22222',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'

      },
      cancelText:{
          color:'#fff',
          textAlign:'center',
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
    EditIcon : {
        
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