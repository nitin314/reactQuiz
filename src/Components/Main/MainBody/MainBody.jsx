import QuestionArea from "./QuestionArea/QuestionArea";
import ResultArea from "./ResultArea/ResultArea";
import './MainBody.css';
import Data from "../../../Data/Data";
import { useState } from "react";

export default function MainBody(){
    return(
        <div className="MainBody">
            <QuestionArea />
            <ResultArea />
        </div>
    )
}