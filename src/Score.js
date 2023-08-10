function Score({visible,value}){

    if(visible){
        return (<div>Your Score is {value}</div>);
    }
    else{
        return (<div></div>);
    }
}

export default Score;