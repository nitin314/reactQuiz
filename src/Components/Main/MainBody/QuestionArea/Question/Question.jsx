import React from 'react';
import './Question.css';

export default function Question({questionHeading}){
    return(
        <div className="Question">
            <p>{questionHeading}</p>
        </div>
    )
}