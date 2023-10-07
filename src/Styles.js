import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    
  },

  webview:{
    width:"100%",
    height:"100%"

  },

  linearGradient: {
    flex: 1,
  },

  containerLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    marginTop:50,
  },



  txtlog:{
    textAlign:"center",
    fontSize:20,

    fontWeight:"bold",
    color:"#000000",
    marginTop:10,
    marginBottom:10,
    

    
  },

  txtlog1:{
    textAlign:"center",
    fontSize:20,

    fontWeight:"bold",
    color:"#fff",
    marginTop:10,
    marginBottom:10,
    

    
  },

  input: {
    height: 50,
    width:350,
    borderWidth: 3,
    borderColor:"green",
    padding: 6,
    fontWeight:"bold",
    color:"#ffff",
    fontSize:20,
    borderRadius:30,
    textAlign:"center",
    marginTop:10,
    marginBottom:15,
    backgroundColor:"#828180",
  

    


  },

  Wrongemail:{

    color:"#000000",
    fontSize:20,
    fontWeight:"bold",

    borderRadius:20,
    padding:10

  },
  Goodemail:{

    color:"#fff",
    fontSize:20,
    fontWeight:"bold",
    backgroundColor:"#00FC3D",
    borderRadius:20,
    padding:10

  },
  wrapperIcon: {
    position: 'absolute',
    right: 0,
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop:10,



  },

  txtlogsubmit:{
    textAlign:"center",
    fontSize:20,
    fontWeight:"bold",
    color:"#ffff",

    
  },
  txthomes:{
    textAlign:"center",
    fontSize:10,
    fontWeight:"bold",
    color:"#ffff",
    

    
  },

  button:{
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#950FFE',
    borderRadius: 10,
    marginTop: 10,
    marginBottom:30,
  },
  buttonHome:{
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#950FFE',
    borderRadius: 10,
    marginTop: 140,
    marginBottom:20,
    width:300


  },

imgtab:{
  width: 100,
  height: 40,



},
welcomeHome:{
  marginTop:20,
  padding:5,
  fontSize:28,
  color:"#fff",
  textAlign:"center"
},
welcomeHomesub:{
  marginTop:20,
  marginBottom:20,
  fontSize:15,
  color:"#fff",
  textAlign:"center",
  padding:10


},
imgwelcome:{
  width:300,
  height:300
},
txtprevio:{
  color:"#fff"
},
imgsidebar:{
  alignSelf:"center",
  marginBottom:20
},
addshome:{
  marginTop:20

},
viewhomes:{
  marginTop:100,
  marginBottom:50,

}


});

export default styles;
