
import './OptionsContainer.css';

export default function OptionsContainer({questionOptions, setSelectedOption, questionStatus , userSelectedAnswer, correctAnswer}){
  // runs when something has changed in the input container and set the selectedOption state value
  function onChangeHandler(e){
    setSelectedOption(e.target.value);
  }

  let options;
  // conditioal rendering of options
  if(questionStatus === 'attempted' && userSelectedAnswer === correctAnswer){
    options = questionOptions.map(option =>{
      return(
        <div className={option === userSelectedAnswer ? 'option green-option' : 'option'} key ={option} >
            <label htmlFor={option}>{option}</label>
            <input type="radio" id={option} name="drone" value={option} /*checked = {selectedOption === option1}*/ />
        </div>
      )
    })
  }
  else{
    if(questionStatus === 'attempted' && userSelectedAnswer !== correctAnswer){
      options = questionOptions.map(option =>{
        return(
          <div className={option === userSelectedAnswer ? 'option red-option' : 'option'} key ={option} >
              <label htmlFor={option}>{option}</label>
              <input type="radio" id={option} name="drone" value={option} /*checked = {selectedOption === option1}*/ />
          </div>
        )
      })
    }
    else{
      options = questionOptions.map(option =>{
        return(
          <div className= 'option' key ={option} >
              <label htmlFor={option}>{option}</label>
              <input type="radio" id={option} name="drone" value={option} /*checked = {selectedOption === option1}*/ />
          </div>
        )
      })
      }
  }

  return(
    <div className="OptionsContainer" onChange={onChangeHandler}>
        {options}
    </div>
  );
}


