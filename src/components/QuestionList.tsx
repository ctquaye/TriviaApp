import React, {useState,useEffect} from 'react'
import {View, Text, StyleSheet, SectionList} from 'react-native'

import Category from './Category';
import {getNewQuiz, QState, Difficulty} from './getQuiz'
import { SafeAreaView } from 'react-native-safe-area-context';

const QuestionList = ({navigation})=>{

const [questionData, setQuestionData] = useState<QState[]>([])
const[number,setNumber] = useState(0)

const newQuiz =async()=>{
    const Questions = await getNewQuiz(Difficulty.MEDIUM)    
    setQuestionData(Questions)
    setNumber(0)
}

//reduced object of sorted questions based on difficulty level
const sortedData = questionData.reduce((accumulator, question) => {
    accumulator[question.difficulty].push(question)
    return accumulator
  }, { easy: [], medium: [], hard: [] })


    useEffect(() => {          
        newQuiz()
    }, [])

return(
    //sectional view to list by difficulty
    <SafeAreaView style={styles.container}>                  
        <SectionList
            sections={[
                {title:'Easy Questions', data:sortedData.easy},
                {title:'Medium Questions', data:sortedData.medium},
                {title:'Hard Questions', data:sortedData.hard},
            ]}
            renderItem={({item}) => <Category        
            category={item.category}
            difficulty={item.difficulty}
            handlePress={()=>navigation.navigate('QuestionandChoices',
            {ans:item.answers, quest:item.question, correct:item.correct_answer})}        
            />        
            }
            renderSectionHeader={({section})=>(
               <View>
                   <Text style={{fontSize:24, fontWeight:'bold',textAlign:'center'}}>
                       {section.title}</Text>
               </View> 
            )}
            keyExtractor={(item,index)=>index.toString()}                     
        />       
  </SafeAreaView>
 
)
}

export default QuestionList;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        position:'relative',
        padding:20,
        backgroundColor:"#f4f3f1"
    }
})