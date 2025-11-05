import { StyleSheet } from 'react-native';
 const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#EFEFEF",
  },
  head:{
    height:'10%',
    width:"100%",
    backgroundColor:"#ADD8E6",
    borderRadius:10,
    justifyContent:"center",
    paddingHorizontal:"7%"
  },
  headtext:{
  color:'333333',
  fontSize:25,
  fontWeight:"900"
  },
  inputarea:{
    marginTop:"5%",
    width:"90%",
    height:"15%",
    borderColor:"#ADD8E6",
    borderWidth:3,
    borderRadius:5,
marginHorizontal:"auto",
backgroundColor:"#FFFFFF",
paddingHorizontal:"3%",
textAlignVertical:"top"
  },
  text:{
    marginTop:'5%',
    marginBottom:'3%',
    marginHorizontal:"5%",
    fontSize:24,
    color:'#333333'
  },
  fontstyle:{
    marginTop:'4%',
    width:'90%',
    backgroundColor:"#d2dfe1",
    height:'14%',
    marginHorizontal:'auto',
    borderRadius:8,
padding:"3%",
  },
  fontstyletext:{
fontSize:20
  },
  fontstylecontainer:{
    marginTop:'6%',
    flexDirection:"row",
    justifyContent:"space-around",
    
  },
  fontchild:{
    backgroundColor:'#cbc9c9',
    width:'30%',
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:99,
    paddingHorizontal:"1.5%"
  },
  color:{
   width:45,
   height:45,
   borderRadius:30,
   backgroundColor:'red', 
   justifyContent:'center',
   alignItems:'center'
  },
  color1:{
    backgroundColor:"#000000"
  },
  color2:
   { 
    backgroundColor: "#00539C" 
   },
color3: {
   backgroundColor: "#D40000" 
  },
color4: {
   backgroundColor: "#056608" 
  },
color5: {
   backgroundColor: "#6A0DAD" 
  },
color6: { 
  backgroundColor: "#704214"
 },
 colortext:{
color:"white",
fontSize:7
 },
 submit:{
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
 generate:{
  backgroundColor:'#ADD8E6',
  padding:"2%",
  paddingHorizontal:"5%",
 
 },
 filename:{
flexWrap:"wrap",
maxWidth:120
 },
 sumbitcontainer:{
  flexDirection:"row",
  justifyContent:'space-around',
  marginTop:"12%",
  paddingHorizontal:"1.5%"
 },
 selectedfont:{
  backgroundColor:"#ADD8E6"
 },selectedcolor:{
  
  borderColor:"#31c1f1",
  borderWidth:2,
 }

})
 export default styles