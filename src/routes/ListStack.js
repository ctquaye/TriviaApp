import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import QuestionList from '../components/QuestionList';
import QuestionandChoices from '../components/QuestionAndChoices'

const screens={
    QuestionList:{
        screen: QuestionList
    },
    QuestionandChoices:{
        screen:QuestionandChoices
    }
}

const ListStack = createStackNavigator(screens)

ListStack.navigationOptions={
    QuestionList:'Paper Trivia'
}

ListStack.navigationOptions={
    QuestionandChoice:'Question'
}

export default createAppContainer(ListStack)