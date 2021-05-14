import React, { useState, useRef,Fragment } from 'react'
import {View, StyleSheet, ScrollView, Text, } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

import Button from './Button'

const QuestionAndChoices =({navigation})=>{
    const[selected,setSelected] = useState()
    const[userAnswers, setUserAnswers]= useState([])

    const inputRefs = useRef(
        [React.createRef(), React.createRef(), React.createRef(), React.createRef()]
    );  

    let answers= navigation.getParam('ans')
    let correctAnswer= navigation.getParam('correct')
    let question = navigation.getParam('quest')

     
    return(
        <SafeAreaView style={styles.parentView}>
            <View style={{flex:1}}></View>
        <View style={styles.question}>
        <TouchableOpacity  >
        <Text style={styles.txt}>{navigation.getParam('quest')}</Text>
        </TouchableOpacity>        
         </View>
         <View style={styles.multiAns}>
          {answers.map((answer,key)=>(
               <Fragment key={key}>
                   <Button 
                   ref={inputRefs[key]}
                   selectedAns={selected}
                   correctAns={correctAnswer}                  
                    {...{key, answer}}                                                        
                   />
               </Fragment>
           ))}
        
        </View>
        
         <View style={{flex:1}}></View>
        </SafeAreaView>
    )
}

export default QuestionAndChoices;

const styles=StyleSheet.create({
    parentView:{   
        flex:1,
        backgroundColor:'#f4f3f1',
        flexWrap:'wrap',
        flexDirection:'column', 
        justifyContent:'center', 
        alignItems:'center'   
    },
    question:{
        flex:2,        
        borderRadius:15,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        width:"80%",
        margin:'5%',
        padding:5,
        height:"20%",        
    },
    multiAns:{
        flex:2,
        flexWrap:'wrap',
        flexDirection:'row',
        width:"100%",
        height:"100%",
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        margin:3,
    },
    txt:{
        fontWeight:'bold',
        fontSize:22,
        color:'#0e0fe0',
    }
    
})

