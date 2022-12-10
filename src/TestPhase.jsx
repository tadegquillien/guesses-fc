import { useState, useRef } from 'react';
import { textStyle, questionStyle, buttonStyle } from './dimensions';
import {
    judgments_sy3_wshaped, judgments_sy3_nshaped,
    judgments_bx2_wshaped, judgments_bx2_nshaped,
    questions_sy3n, questions_sy3w, questions_bx2n, questions_bx2w, conditions,
    trial_ids
} from './randomizedParameters';
import Transition from './Transition';
import Data from './Data';



const TestPhase = (props) => {
    const condition = conditions[props.testNumber]

    const questions = condition === "sy3n" ? questions_sy3n :
        condition === "sy3w" ? questions_sy3w :
            condition === "bx2n" ? questions_bx2n :
                condition === "bx2w" ? questions_bx2w : NaN;


    const judgments = condition === "sy3n" ?
        judgments_sy3_nshaped : condition === "sy3w" ?
            judgments_sy3_wshaped : condition === "bx2n" ?
                judgments_bx2_nshaped : condition === "bx2w" ?
                    judgments_bx2_wshaped : NaN;

    const label = (condition === "sy3n" |
        condition === "sy3w") ?
        "SY3" :
        (condition === "bx2n" |
            condition === "bx2w") ?
            "BX2" : NaN;


    const [trialNumber, setTrialNumber] = useState(0);
    const incrementTrial = (integer) => {
        setTrialNumber(integer + 1)
    };



    const Histogram = (props) => {
        const [response, setResponse] = useState("unclicked");
        const question = props.questions[props.trialNumber - 1];
        const range = props.judgments[question];
        const img = range[2];
        const pic = <img src={img} style={{ width: "60vw" }} />

        const handleChange = (e) => {
            setResponse(e.target.value);
        }

        const text = <p>If we picked a person at random from the population, that person probably would have:</p>

        // a coin flip randomizing which interval appears first
        const flip = useRef(Math.random() > .5 ? true : false);

        const textA = flip.current ?
            <span>"between {range[0]} and {range[0] + 4} units
                of {props.label} in their blood".</span> :
            <span>"between {range[1]} and {range[1] + 4} units
                of {props.label} in their blood".</span>;

        const textB = flip.current ?
            <span>"between {range[1]} and {range[1] + 4} units
                of {props.label} in their blood".</span> :
            <span>"between {range[0]} and {range[0] + 4} units
                of {props.label} in their blood".</span>;

        const valueA = flip.current ? range[0] : range[1];
        const valueB = flip.current ? range[1] : range[0];

        const radio = <div onChange={(e) => handleChange(e)}>
            <input type="radio" name="choice" value="A" style={{ height: "2.5em", width: "2.5em" }} />
            <span style={{ fontSize: "1em" }}>{textA}</span>
            <br></br>
            <br></br>
            <input type="radio" name="choice" value="B" style={{ height: "2.5em", width: "2.5em" }} />
            <span style={{ fontSize: "1em" }}>{textB}</span>

        </div>

        const handleClick = () => {

            Data.responses.push({
                "response": response,
                "valueA": valueA,
                "valueB": valueB,
                "condition": props.condition,
                "trial_number": props.trialNumber,
                "order": props.testNumber
            });
            if (props.trialNumber == trial_ids.length) {
                console.log(Data);
                props.incrementTest((props.testNumber));
            }
            props.incrementTrial(props.trialNumber);
        }
        const button = response == "unclicked" ? "" : <button style={buttonStyle}
            onClick={() => handleClick()}>Next</button>

        return (
            <div style={questionStyle}>
                {pic}
                {text}
                {radio}
                <br></br>
                {button}<br></br>
            </div>
        )
    }
    const listoftrials = trial_ids.map((i) => {
        return (<Histogram trialNumber={trialNumber} incrementTrial={incrementTrial}
            testNumber={props.testNumber} incrementTest={props.incrementTest}
            mode={"test"} condition={condition} label={label} questions={questions}
            judgments={judgments} />)
    })

    listoftrials.unshift(<Transition trialNumber={trialNumber} incrementTrial={incrementTrial}
        testNumber={props.testNumber} incrementTest={props.incrementTest}
        mode={"instructions"} condition={condition} />)


    return (listoftrials[trialNumber])

}

export default TestPhase;