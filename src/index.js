//the main page

//the experiment has the following structure:

//-consent form
//-instructions
//-training phase: the participant plays ten rounds of the game, in order
//  to get familiar with the game
//-transition
//-test phase: the participant observes the outcome of a round of the game
//  played by a fictitious player, and answers questions about the causal strength
//  of the colored balls drawn by that player
//-demographics
//-end

import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConsentForm from './ConsentForm';
import TestPhase from './TestPhase';
import Instructions from './Instructions';
import Demographics from './Demographics';
import { conditions, probCheckOrder } from './randomizedParameters';
import { textStyle, buttonStyle } from './dimensions';
import { shuffle } from './convenienceFunctions';
import { urn_ids, actualWorld } from './gameParameters';

import reportWebVitals from './reportWebVitals';
import Data from './Data';



const Root = () => {
  //keeps track of the current phase
  const [currentPhase, setCurrentPhase] = useState("prolificId");
  //keeps track of the current trial, for the Training phase
  const [trialNumber, setTrialNumber] = useState(1);
  //keeps track of the current trial, for the Test phase
  const [testNumber, setTestNumber] = useState(0);
  //keeps track of the current trial, for the probability check phase
  const [checkNumber, setCheckNumber] = useState(0);

  //increment the trial number, in the Training phase
  const increment = (integer) => setTrialNumber(integer + 1);
  //increment the trial number, in the Test phase
  const incrementTest = (integer) => setTestNumber(integer + 1);
  //increment the trial number, in the probability check phase
  const incrementCheck = (integer) => setCheckNumber(integer + 1);



  //a list of the urns about which we will ask causal questions,
  //arranged in the order in which we will ask the questions during the Test phase
  //i.e. if the array is [3,1,7] it means we will ask about the causal strength
  //of urn 3, then urn 1, then urn 7 (note that the urn ID is not the same as the position of
  //the urn on the screen)
  const hist_ids = Array.from(Array(conditions.length).keys());


  //generate the trials of the Test phase
  var tests = hist_ids.map((i) => {
    return (
      <TestPhase key={i} incrementTest={incrementTest}
        hist_ids={hist_ids} phase={currentPhase} testNumber={testNumber}
        mode="test"
      />
    )
  })





  //add a page at the beginning of the Test phase which will
  //display instructions
  // tests.unshift(
  //   <TestPhase key={0} incrementTest={incrementTest}
  //     hist_ids={hist_ids} phase={currentPhase} testNumber={testNumber}
  //      shuffledUrnIds={shuffledUrnIds}
  //   />
  // )


  const ProlificId = (props) => {

    const [id, setId] = useState("");
    const handleId = (e) => {
      setId(e.target.value)
    };
    const handleClick = () => {
      Data.prolificId.push(id);
      props.setCurrentPhase('consentForm');

    }
    return (
      <div style={textStyle}>Welcome to the study!<br></br>
        <br></br>
        Before we start, please enter your Prolific ID:<br></br>
        <br></br>
        <input style={{ width: "400px", height: "50px", fontSize: "25px" }}
          onChange={(e) => handleId(e)}
        ></input>
        <br></br>
        <button style={buttonStyle} onClick={() => handleClick()}>submit</button>
      </div>
    )

  }


  //the end of the study
  const ending =
    <div style={textStyle}>Thank you for your participation!
      <br></br>
      Please click on this link to go back to Prolific: <a href="https://app.prolific.co/submissions/complete?cc=113C348D">https://app.prolific.co/submissions/complete?cc=113C348D</a>
      <br></br>
      After you have clicked the link, you can then close the present tab.</div>;


  // //these two variables determine which phase follows the probability check phase
  // //and the test phase, respectively
  // const afterProb = probCheckOrder === "first" ? "transition" : "demographics";
  // const afterTest = probCheckOrder === "first" ? "demographics" : "probabilityCheck"; 

  //the structure of the study:
  //this code displays a page, in function of the current phase,
  //and of the trial number within that phase
  return (
    currentPhase === "prolificId" ? <ProlificId setCurrentPhase={setCurrentPhase} /> :
      currentPhase === "consentForm" ? <ConsentForm setCurrentPhase={setCurrentPhase} /> :
        currentPhase === "instructions" ? <Instructions
          setCurrentPhase={setCurrentPhase} hist_ids={hist_ids} probCheckOrder={probCheckOrder} /> :
          //currentPhase === "transition" ? <Transition setCurrentPhase={setCurrentPhase}
          //hist_ids = { hist_ids } /> :
          currentPhase === "test" ? ((testNumber + 1) > hist_ids.length ? setCurrentPhase("demographics") : tests[testNumber]) :
            currentPhase === "demographics" ? <Demographics setCurrentPhase={setCurrentPhase} /> :
              currentPhase === "ending" ? ending :
                <p>{currentPhase}</p>
  )
}

//display the experiment
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// }