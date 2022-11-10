import React from 'react'
import QuestionArea from "./QuestionArea/QuestionArea";
import ResultArea from "./ResultArea/ResultArea";
import './MainBody.css';
import Data from "../../../Data/Data";
import { useState } from "react";

const myQuestions = [...Data];

export default function MainBody(){
    const [questions , setQuestions] = useState(myQuestions);
    return(
        <div className="MainBody">
            <QuestionArea 
                questions ={questions}
                setQuestions ={setQuestions}
            />
            <ResultArea questions ={questions}/>
        </div>
    )
}