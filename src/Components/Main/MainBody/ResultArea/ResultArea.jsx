import './ResultArea.css';

export default function ResultArea(){
    return(
        <div className="ResultArea">
            <p className="heading-result-area">
                Current Status
            </p>
            <div className="item-result-area">
                <div className="total-questions">
                    <p>Total Questions</p>
                    <p className='val'>7</p>
                </div>
                <div className="attempted-questions">
                    <p>Total Questions</p>
                    <p className='val'>5</p>
                </div>
                <div className="remaining-questions">
                    <p>Total Questions</p>
                    <p className='val'>2</p>
                </div>
                <div className="correct-questions">
                    <p>Total Questions</p>
                    <p className='val'>3</p>
                </div>
                <div className="incorrect-questions">
                    <p>Total Questions</p>
                    <p className='val'>2</p>
                </div>
            </div>
        </div>
    )
}