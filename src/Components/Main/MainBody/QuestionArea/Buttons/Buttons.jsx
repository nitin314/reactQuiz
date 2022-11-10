import React from 'react';
import './Buttons.css';

export default function Buttons({ questions,setQuestions ,currentQuestionNumber, setCurrentQuestionNumber, selectedOption, setSelectedOption}){
    // 'Check' button click handler', updates the question state as per user input
    function setQuestionsHandler(){
        // if question is already attempted then do nothing
        if(questions[currentQuestionNumber].status === 'attempted'){
            return;
        }
        // if selected option has some value in it then update the current question's state property to 'attempted', and save user input for the question, and update the overall question list's state
        else if(selectedOption){
            // updating the questions state array if user selected correct option
            const newValofCurrentQuestion = {...questions[currentQuestionNumber] , status : 'attempted', userchoice: selectedOption };
            const updatedQuestions = questions.map(question => {
                    if(currentQuestionNumber===question.QuestionNum - 1){
                    return newValofCurrentQuestion;
                    }
                    else{
                    return question;
                    } 
            });
            setQuestions(updatedQuestions);
        }
    }


    // Prev Button Handler
    function currentQuestionNumberPreviousHandler(){
        if(currentQuestionNumber <=0){
            return;
        }
        setCurrentQuestionNumber(val=>val-1);
        setSelectedOption(null);
    }

    // Next Button Handler
    function currentQuestionNumberNextHandler(){
        if(currentQuestionNumber === questions.length-1){
            return;
        }
        setCurrentQuestionNumber(val=>val+1);
        setSelectedOption(null);
    }

    console.log(questions);

    return(
        <div className="Buttons">
            <button className="answer-check" onClick={setQuestionsHandler}>Check</button>
            <div className="prev-next-btn">
                <button className="prev-question" onClick={currentQuestionNumberPreviousHandler}>Prev.</button>
                <button className='next-question' onClick={currentQuestionNumberNextHandler}>Next</button>
            </div>
        </div>
    )
}