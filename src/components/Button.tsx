import React,{useState,useEffect, forwardRef, useImperativeHandle} from "react";
import {TouchableOpacity} from "react-native-gesture-handler"
import{Text, View,StyleSheet} from "react-native"

const Button=({answer,correctAns, selectedAns}, ref)=>{

    const[styling,setStyling]=useState(styles.default);
    const[ans, setAns]=useState()

    const handleTouch=()=>{
        setAns(answer)
        if(answer===correctAns){
            setStyling(styles.correct)
        }
        else{
            setStyling(styles.wrong)
        }
    }
      
   
    useEffect(()=>{
        if(selectedAns!==answer){
            setStyling(styles.default)
        }
    },[])
       
    return( 
    <View style={[styling,]}>
        <TouchableOpacity onPress={handleTouch} ref={ref}>
        <Text style={{fontSize:20}}>{answer}</Text>
    </TouchableOpacity> 
    </View>
      
    )

}



const forwardButton = forwardRef(Button)

export default forwardButton;

const styles = StyleSheet.create({
        default:{    
       justifyContent:'center', 
        alignItems:'center',     
        margin:'2%', 
        borderRadius:15, 
        borderWidth:0,   
        width:"40%",
        height:65, 
        backgroundColor:"white" ,
         
    },
    correct:{
        justifyContent:'center', 
        alignItems:'center',   
        margin:'2%', 
        borderRadius:15, 
        borderWidth:0,  
        width:"40%",
        height:65,  
        backgroundColor:'#009D40',        
    },
    wrong:{
        justifyContent:'center', 
        alignItems:'center', 
        margin:'2%', 
        borderRadius:15, 
        borderWidth:0,   
        width:"40%",
        height:65,  
        backgroundColor:'#FF570D', 
            
    }
})