import { useState } from 'react';
import './style-questions.css';


function Question({ q }) {
    const choices = q.question_choice.map((choice,index)=>{
       return(<li key={index}>{choice}</li>)
    });

    return (
        <div>
            <h2>{q.question_number}: {q.question_text}</h2>
            <ul>{choices}</ul>
        </div>);
}
export default Question;