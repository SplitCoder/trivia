import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
QuestionNum = 0
  return <div className="app"> <Question Q= {data[0].}/> </div>;

 
}

export default App;

function Question (props){
  return(
  <div classname=
  "Questions">
    <div className="app"> {props.Q}  </div>;
  </div>
  );
}