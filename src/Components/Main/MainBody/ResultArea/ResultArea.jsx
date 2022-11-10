import React from 'react';
import './ResultArea.css';

export default function ResultArea({questions}){
    const totalQuestions =questions.length;
    const attemptedQuestions =  questions.filter(question =>{
       return question.status === 'attempted';
    }).length;
    const remainingQuestions = totalQuestions - attemptedQuestions;
    const correctAnswers = questions.filter(question =>{
        return question.Answer === question.userchoice;
     }).length;
     const incorrectAnswers = attemptedQuestions - correctAnswers;

    return(
        <div className="ResultArea">
            <p className="heading-result-area">
                Current Status
            </p>
            <div className="item-result-area">
                <div className="total-questions">
                    <p>TotalQuestions</p>
                    <p className='val'>{totalQuestions}</p>
                </div>
                <div className="attempted-questions">
                    <p>Attempted Questions</p>
                    <p className='val'>{attemptedQuestions}</p>
                </div>
                <div className="remaining-questions">
                    <p>Remaining Questions</p>
                    <p className='val'>{remainingQuestions}</p>
                </div>
                <div className="correct-questions">
                    <p>Correct Questions</p>
                    <p className='val'>{correctAnswers}</p>
                </div>
                <div className="incorrect-questions">
                    <p>Incorrect Questions</p>
                    <p className='val'>{incorrectAnswers}</p>
                </div>
            </div>
        </div>
    )
}