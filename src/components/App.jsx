import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
let [ questionNum, SetquestionNum ] = useState(0)
  //QuestionNum = data[0]
let [ correctAnswer, SetcorrectAnswer ] = useState(0);
let [ isAnswered, SetisAnswered ] = useState(false);

if (isAnswered == false) {
  CorrectAnswer = "Question is not answered"

} else {
CorrectAnswer = "The Correct Answer is " + data[questionNum].question.correct_choice_index

}


  return <div className="app"> <Question Q= {data[questionNum].question.text} QN= {questionNum}/>
  <Nextquestion QN= {questionNum} QNN= {SetquestionNum} NQ={SetisAnswered}/> 
  <br/>
  <button onClick={() => SetisAnswered(true)}>Click for the correcty answer </button> <br/>{CorrectAnswer}</div>;
  
 
}

export default App;

function Question (props){
  return(
  <div classname=
  "Questions">
    <div className="app"> {props.Q} </div>
    
{

  data[props.QN].question.choices.map((choice)=> 
  {return <Answer A={choice}/>})
}

  </div>
  );
}

function Nextquestion (props){
  return(<div className="app">
    <button onClick={() => {
      props.QNN( props.QN + 1) 
      props.NQ( false ) } 
      }>Next Question</button>
    
</div>

    
  );
}

function Answer (props){
  return(
  <div classname="kusgfak">
    {props.A}
  </div>
  );
}
