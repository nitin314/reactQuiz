import QuestionArea from "./QuestionArea/QuestionArea";
import ResultArea from "./ResultArea/ResultArea";
import './MainBody.css';
import Data from "../../../Data/Data";
import { useState } from "react";

const myQuestions = [...Data];

export default function MainBody(){
    const [questions , setQuestions] = useState(myQuestions);
    const [currentQuestionNumber , setCurrentQuestionNumber] = useState(0);
    return(
        <div className="MainBody">
            <QuestionArea 
                questions ={questions}
                setQuestions ={setQuestions}
                currentQuestionNumber={currentQuestionNumber} 
                setCurrentQuestionNumber ={setCurrentQuestionNumber} 
            />
            <ResultArea questions ={questions}/>
        </div>
    )
}