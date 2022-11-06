import './Buttons.css';

export default function Buttons({ questions,setQuestions ,currentQuestionNumber, setCurrentQuestionNumber, selectedOption, setSelectedOption}){
    const currentQuestion = {...questions[currentQuestionNumber]};
    // function that will update question when we click on check button
    function setQuestionsHandler(){
        // if question is already attempted then do nothing
        if(questions[currentQuestionNumber].status === 'attempted'){
            return;
        }
        // is selected option has some value in it and the user answer match the actual answer of the question
        if(selectedOption && questions[currentQuestionNumber].Answer === selectedOption){
            // updating the questions state array if user selected correct option
            const newValofCurrentQuestion = {...currentQuestion , status : 'attempted', userchoice: selectedOption };
            console.log(newValofCurrentQuestion);
            const updatedQuestions = questions.map(question => {
                console.log(question.QuestionNum , currentQuestionNumber);
                  if(currentQuestionNumber===question.QuestionNum - 1){
                    return newValofCurrentQuestion;
                  }
                  else{
                    return question;
                  } 
            });
            setQuestions(updatedQuestions);
         }
         else if(selectedOption && questions[currentQuestionNumber].Answer !== selectedOption){
             // updating the questions state array if user selected wrong option
             const newValofCurrentQuestion = {...currentQuestion , status : 'attempted', userchoice: selectedOption };
             console.log(newValofCurrentQuestion);
             const updatedQuestions = questions.map(question => {
                 console.log(question.QuestionNum , currentQuestionNumber);
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