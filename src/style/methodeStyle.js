import {  StyleSheet } from 'react-native';
import couleur from '../constance/color'

const Styles = StyleSheet.create({
    container: {
      flex:1,
      paddingVertical:30,
      alignItems:'center',
      justifyContent:'center',
     
      },
      Appbar:{
            backgroundColor:'black'
      },
      Choix:{
        marginTop:30,
        elevation:8,
        backgroundColor: "white",
        width:300,
         borderRadius: 15,
         paddingVertical: 25,
         alignItems:'center',
         justifyContent:'center',
         flexDirection:'row',
        
       },
     
       button: {
         flex:1,
         justifyContent:"flex-end"
        
       },
       btnView:{
         padding:10,
         width:"100%",
         flexDirection:'row',
         justifyContent:"space-evenly"
       },
       btnAction:{
         backgroundColor:'white',
         borderRadius:10,
         justifyContent:'center',
         alignItems:'center',
         padding:15,
         width:150,
         marginVertical:10,
         borderColor:'grey'
       },
       btnSelected:{
         backgroundColor:'black',
         borderRadius:10,
         justifyContent:'center',
         alignItems:'center',
         padding:15,
         width:150,
         marginVertical:10
       },
      
       btnText:{
         color:'black',
         fontSize:17

       },
       btnTextSelected:{
         color:'white',
         fontSize:17

       },
       Radio:{
         justifyContent:'flex-start'
       
       },
       Content:{
        flexDirection:'row',
        justifyContent:'flex-end',
       
        
       },
       ContentText:{ 
         padding:5,
         fontSize:16,
         fontWeight:'bold',
         textAlign:"justify"
       },

      
      })
   

export default Styles
