import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
QuestionNum = 0
  return <div className="app"> <Question Q= {data[0].question.text}/> 
  <Nextquestion/> </div>;

 
}

export default App;

function Question (props){
  return(
  <div classname=
  "Questions">
    <div className="app"> {props.Q}  </div>
    <Answer A= {data[0].question.choices[0]}/>
{
choice= question.choices
question.choices.map((choice)=>{return… render your answer here })
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