import { useState } from 'react';
import './style-questions.css';




function Question({ q, answerChanged }) {

    const handleClick = (e)=>{
        var name = e.target.name;
        var value = e.target.value;
        answerChanged(name,value);
    }

    const choices = q.question_choice.map((choice,index)=>{
       return(<div onChange={handleClick} key={index}><input type="radio" value={index} name={q.question_number}/>
       <label>{choice}</label></div>);
    });


    return (
        <div>
            <h2>{q.question_number}: {q.question_text}</h2>
           <div>{choices}</div>
           <hr></hr>
        </div>);
}
export default Question;