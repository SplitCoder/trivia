import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
// let [ questionNum, SetquestionNum ] = useState
  QuestionNum = data[0]
let [ correctAnswer, SetcorrectAnswer ] = useState(0);
let [ isAnswered, SetisAnswered ] = useState(false);

if (isAnswered == false) {
  CorrectAnswer = "Question is not answered"

} else {
CorrectAnswer = "The Correct Answer is " + data[0].question.correct_choice_index

}


  return <div className="app"> <Question Q= {data[0].question.text}/> 
  <Nextquestion/> <br/><button onClick={() => SetisAnswered(true)}>Click for the correcty answer </button> <br/>{CorrectAnswer}</div>;
  
 
}

export default App;

function Question (props){
  return(
  <div classname=
  "Questions">
    <div className="app"> {props.Q}  </div>
    
{

  data[0].question.choices.map((choice)=> 
  {return <Answer A={choice}/>})
}

  </div>
  );
}

function Nextquestion (){
  return(
    <button>Next Question</button>


    
  );
}

function Answer (props){
  return(
  <div classname="kusgfak">
    {props.A}
  </div>
  );
}
