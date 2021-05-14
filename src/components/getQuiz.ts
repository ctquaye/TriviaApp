export const _=(array:any[])=>[...array].sort(()=>Math.random() - 0.7);

import Question from './Category';
import axios from 'axios'

 export enum Difficulty{
    EASY="easy",
    MEDIUM="medium",
    HARD="hard"
}

export type QuestionObj = {
  category: string;
  answers: string[];
  correct_answer: string;
  incorrect_answers: string[];
  question:string;
  difficulty: string;
  
  type:string;
}

export type QState = QuestionObj & {answer: string[]}

export  const getNewQuiz =async (Difficulty) =>{
    difficulty:Difficulty

    const apiUrl = 'https://opentdb.com/api.php?amount=30';

      const response = await axios.get(apiUrl);
      const allQuestions = response.data;            
      return allQuestions.results.map((questions: QuestionObj)=>({
        ... questions,
        answers:_([...questions.incorrect_answers, questions.correct_answer])
      }))
      
}