import { useState } from 'react';
import './style-questions.css';


function Question({ id, questionBody, updateSubmissions, isSubmitted }) {


    const handleChange = (e) => {
        updateSubmissions(id, e.target.value);
    }

    const getClassColor = (q) =>{
        if(isSubmitted && q.isCorrect == 'true'){
            return "right";
        }
        else{
            return "normal";
        }
        
    }

    const getQuestionColor = () =>{
        return "right";
    }


    const getAnswers = questionBody.questionAnswers.map((q, index) => {
        return <div className={getClassColor(q)} key={index} ><input value={q.isCorrect} onChange={handleChange} type="radio" name={questionBody.number} />{q.answerText}</div>
    });

    return (
        <div>
            <h2>{questionBody.number} {questionBody.questionText}</h2>
            {getAnswers}
        </div>);
}
export default Question;