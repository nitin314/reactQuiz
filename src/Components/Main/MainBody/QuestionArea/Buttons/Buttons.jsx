import './Buttons.css';

export default function Buttons(){

    return(
        <div className="Buttons">
            <button className="answer-check">Check</button>
            <div className="prev-next-btn">
                <button className="prev-question">Prev.</button>
                <button className='next-question'>Next</button>
            </div>
        </div>
    )
}