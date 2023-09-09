import { useState } from 'react';
import './style-questions.css';

import Answer from './Answer';

function Question({ q, answerChanged, testSubmitted }) {
    const [isCorrect, updateIsCorrect] = useState(false);


    const handleClick = (e) => {
        var name = e.target.name;
        var value = e.target.value;

        if (parseInt(q['answer_key']) === (parseInt(value) + 1)) {
            updateIsCorrect(true);
        }
        else {
            updateIsCorrect(false);
        }


        answerChanged(name, value);
    }

    const checkSubmitted = () => {
        if (testSubmitted) {
            if(isCorrect){
                return 'right';
            }
            else{
                return 'wrong';
            }
        }
        else{
            return 'normal';
        }
    }

    const choices = q.question_choice.map((choice, index) => {
        return (<div onChange={handleClick} key={index}><input type="radio" value={index} name={q.question_number} />
            <label> {choice}</label></div>);
    });


    return (
        <div>
            <h2>{q.question_number}: {q.question_text}</h2>
            <div>{choices}</div>
            <Answer isSubmitted={testSubmitted} isCorrect={isCorrect} answerText={q.question_reference}/>
            <hr></hr>
        </div>);
}
export default Question;