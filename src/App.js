import { useEffect, useState } from 'react';
import Questions from "./data/questions.json";
import newQuestions from "./data/canadian_aviation.json";
import Question from './Question';
import Score from './Score';


function getAllQuestions() {


    //initialize a new empty array with all questions
    var newAllQuestions = [];
    //get 5 random questions from each section, add it to the array
    for (var n=0; n < 70; n++){
        //first we get the current section that we are in, from 0-13
        var currSection = parseInt(n/5);

        //then we get the number of questions that are in or remaining in that section
        var remainingQuestions = newQuestions.sections[currSection].section_questions.length;

        //then we randomly generate a number between 0 and the length of the questions
       var randomSelect = Math.floor((Math.random())*remainingQuestions);

        //then we add it to the new Array of Questions
       var addQ = newQuestions.sections[currSection].section_questions[randomSelect];
       newAllQuestions.push(addQ);

        //and lastly, we remove it from the bank so that it cannot be added again
       var index = newQuestions.sections[currSection].section_questions.indexOf(addQ);
       newQuestions.sections[currSection].section_questions.splice(index,1);
    }


    

    return newAllQuestions;
}



function App() {
    const [questions, updateQuestions] = useState(getAllQuestions());
    const [responses, updateResponses] = useState({});
    const [testSubmitted, updateTestSubmitted] = useState(false);
    const [finalScore, updateFinalScore] = useState(0);
    const [scoreSheet, updateScoreSheet] = useState([]);


    var hiddenDiv = { visibility: "hidden" };
    var showDiv = { visibility: "visible" };

    const updateScore = (id, value) => {
        var tempResponses = responses;

        tempResponses[id] = value;


        updateResponses(tempResponses);
    }
    const renderedQuestions = questions.map((question, index) => {

        return (<Question q={question} key={index}/>);
    });

    



    return (
        <div>
            <h1><center>Welcome to PSTAR Quiz</center></h1>
            <div>{renderedQuestions}</div>
        </div>

    );
}

export default App;