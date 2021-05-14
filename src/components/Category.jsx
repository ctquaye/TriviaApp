import React from 'react'
import {View, StyleSheet, ScrollView, Text, Button} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


const Category =({category,handlePress, difficulty})=>{

let difficultyStyle = {}

if(difficulty==="easy"){
    difficultyStyle=styles.easy
}
else if(difficulty==="medium")
{
    difficultyStyle=styles.medium
}
else{
    difficultyStyle=styles.hard
}

 return(
     <TouchableOpacity onPress={handlePress} style={difficultyStyle}>
         <Text style={styles.txt}>{category} </Text>           
     </TouchableOpacity>
  
 )   
    
}

export default Category;

const styles= StyleSheet.create({
    btn:{
                
    },
    txt:{
        flex:1,
        textAlign:'center',
        fontSize:15,
        margin:10,        
    },
    easy:{
        flex:1, 
        //flexBasis:'55%',  
        margin:'2%', 
        height:65,
        borderRadius:15, 
        borderWidth:3,    
        borderColor:"#009D40",        
    },
    medium:{
        flex:1, 
        //flexBasis:'55%',  
        margin:'2%', 
        height:65,
        borderRadius:15, 
        borderWidth:3,   
        borderColor:"#0e0fe0",       
    },
    hard:{
        flex:1, 
       //flexBasis:'55%',  
        margin:'2%', 
        height:65,
        borderRadius:15, 
        borderWidth:3,   
        borderColor:"#FF570D",
    }
})