import { useState } from 'react';
import './style-questions.css';




function Question({ q }) {
    const choices = q.question_choice.map((choice,index)=>{
       return(<div key={index}><input type="radio" value={choice} name={q.question_number}/>
       <label>{choice}</label></div>);
    });

    return (
        <div>
            <h2>{q.question_number}: {q.question_text}</h2>
           <div>{choices}</div>
        </div>);
}
export default Question;