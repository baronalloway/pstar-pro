//React and JS Imports
import { useEffect, useState } from 'react';
import Questions from "./data/questions.json";
import newQuestions from "./data/canadian_aviation.json";
import Question from './Question';
import Score from './Score';

//CSS Imports
import 'bulma/css/bulma.css';
import './css/app-style.css';

function getAllQuestions() {


    //initialize a new empty array with all questions
    var newAllQuestions = [];
    //get 5 random questions from each section, add it to the array
    for (var n = 0; n < 70; n++) {
        //first we get the current section that we are in, from 0-13
        var currSection = parseInt(n / 5);

        //then we get the number of questions that are in or remaining in that section
        var remainingQuestions = newQuestions.sections[currSection].section_questions.length;

        //then we randomly generate a number between 0 and the length of the questions
        var randomSelect = Math.floor((Math.random()) * remainingQuestions);

        //then we add it to the new Array of Questions
        var addQ = newQuestions.sections[currSection].section_questions[randomSelect];
        newAllQuestions.push(addQ);

        //and lastly, we remove it from the bank so that it cannot be added again
        var index = newQuestions.sections[currSection].section_questions.indexOf(addQ);
        newQuestions.sections[currSection].section_questions.splice(index, 1);
    }




    return newAllQuestions;
}




function App() {
    const [questions, updateQuestions] = useState(getAllQuestions());
    const [responses, updateResponses] = useState({});
    const [testSubmitted, updateTestSubmitted] = useState(false);
    const [score, updateScore] = useState({});



    var hiddenDiv = { visibility: "hidden" };
    var showDiv = { visibility: "visible" };

    const updateWorksheet = (name, id) => {

        var tempResponses = responses;
        tempResponses[name] = id;
        updateResponses(tempResponses);

    }


    const renderedQuestions = questions.map((question, index) => {
        

        return (<Question q={question} key={index} answerChanged={updateWorksheet} />);
    });


    const gradeTest = () => {
        var finalScore = 0;
        var numIncorrect = 0;
        //iterate through the score sheet that is submitted through the test
        for (var i in responses) {
            //if the answer is correct, update the score +1
            var submitted_response = parseInt(responses[i]) + 1;
            var correct_answer = parseInt(questions.find(a => a.question_number === i).answer_key);

            if ((submitted_response) == correct_answer) {
                finalScore += 1;
            }
            else{
                numIncorrect +=1;
            }
        }
        updateScore({"finalScore":finalScore,"numIncorrect":numIncorrect});


    }


    return (
        <div>
            <h1><center>Welcome to PSTAR Quiz</center></h1>

            <div className="columns">
                <div className="column is-three-quarters">{renderedQuestions}</div>

                <div className="column is-one-quarter">
                    <div className="sticky"><h2>Submit</h2>
                        <button onClick={gradeTest}>Submit Test</button>
                        <div>Correct: {score['finalScore']} ({parseInt((score['finalScore']/70)*100)}%)
                        <br/>
                        Incorrect: {score['numIncorrect']}
                        <br/>
                        Unanswered: {70-(score['finalScore']+score['numIncorrect'])}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;