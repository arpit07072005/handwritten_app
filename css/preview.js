import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"#EFEFEF",
},
buttons:{
flexDirection:"row",
  justifyContent:'space-around',
  marginTop:"8%",
  paddingHorizontal:"1.5%"
},
head:{
    backgroundColor:"#ADD8E6",
    height:"10%",
    width:"100%",
    borderRadius:10,
    justifyContent:"center",
    paddingHorizontal:"7%"
},
headtext:{
  color:'333333',
  fontSize:25,
  fontWeight:"900"
  },
  back:{
    marginTop:"8%",
    paddingHorizontal:'5%',
    flexDirection:"row",
    alignItems:"center"
  },
  backtext:{
    fontSize:20
  },
  preimg:{
    backgroundColor:"#ADD8E6",
    width:"90%",
    height:"65%",
    marginHorizontal:"auto",
    marginVertical:"5%",
    borderRadius:15
  },
  pdf:{
  borderRadius:2,
  borderColor:"#ADD8E6",
  borderWidth:2,
  padding:'6%',
  flexDirection:"row",
  gap:"5%",
  alignItems:'center',
  justifyContent:"center",
  fontSize:25,
  borderRadius:10,
  paddingHorizontal:"2%"
  },
  image:{
    backgroundColor:'#ADD8E6',
  paddingHorizontal:"5%",
  },
  colortext:{
color:"#fdffff",
 },


})

export default styles