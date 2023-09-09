function Answer({ isSubmitted, isCorrect, answerText }) {

    const checkVisibility = () => {
        if (isSubmitted) {
            return "visible";
        }
        else {
            return "hidden";
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



    return (<div className={checkCorrect()} style={{ visibility: checkVisibility() }}>
        {answerText}
    </div>);
}

export default Answer;