import { useState } from 'react';
import './style-questions.css';




function Question({ q, answerChanged }) {

    const handleClick = (e)=>{
        var name = e.target.name;
        var id = e.target.id;
        answerChanged(name,id);
    }

    const choices = q.question_choice.map((choice,index)=>{
       return(<div onChange={handleClick} key={index}><input type="radio" id={index} value={choice} name={q.question_number}/>
       <label>{choice}</label></div>);
    });

    return (
        <div>
            <h2>{q.question_number}: {q.question_text}</h2>
           <div>{choices}</div>
        </div>);
}
export default Question;