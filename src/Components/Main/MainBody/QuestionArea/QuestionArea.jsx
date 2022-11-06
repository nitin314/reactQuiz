import { useState } from 'react';
import Buttons from './Buttons/Buttons';
import OptionsContainer from './OptionsContainer/OptionsContainer';
import Question from './Question/Question';
import './QuestionArea.css';

export default function QuestionArea(){
    return(
        <div className="QuestionArea">
            <Question />
            <OptionsContainer />
            <Buttons />
        </div>
    )
}