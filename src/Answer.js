import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function Answer({ isSubmitted, isCorrect, answerText }) {

    const checkVisibility = () => {
        if (isSubmitted) {
            return "block";
        }
        else {
            return "none";
        }
    }

    const checkCorrect = () => {
        if (isCorrect) {
            return "notification is-primary is-light";
        }
        else {
            return "notification is-danger is-light";
        }
    }

    const checkIcon = () => {
        if(isCorrect){
            return(faCircleCheck);
        }
        else{
            return(faCircleXmark);
        }
    }



    return (<div className={checkCorrect()} style={{ display: checkVisibility() }}>
       <FontAwesomeIcon icon={checkIcon()} /> {answerText}
    </div>);
}

export default Answer;