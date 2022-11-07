import { useState } from 'react';
import Buttons from './Buttons/Buttons';
import OptionsContainer from './OptionsContainer/OptionsContainer';
import Question from './Question/Question';
import './QuestionArea.css';

export default function QuestionArea({questions ,setQuestions}){
    const [currentQuestionNumber , setCurrentQuestionNumber] = useState(0);
    const[selectedOption, setSelectedOption] = useState(null);
    return(
        <div className="QuestionArea">
            <Question questionHeading = {questions[currentQuestionNumber].QuestionHeading} />
            <OptionsContainer 
                questionOptions = {questions[currentQuestionNumber].options} 
                selectedOption={selectedOption} 
                setSelectedOption={setSelectedOption}
                questionStatus = {questions[currentQuestionNumber].status}
                userSelectedAnswer = {questions[currentQuestionNumber].userchoice}
                correctAnswer = {questions[currentQuestionNumber].Answer}
            />
            <Buttons 
                questions = {questions}
                setQuestions = {setQuestions}
                currentQuestionNumber = {currentQuestionNumber}
                setCurrentQuestionNumber ={setCurrentQuestionNumber}  
                selectedOption = {selectedOption} 
                setSelectedOption={setSelectedOption}
            />
        </div>
    )
}