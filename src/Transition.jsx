
import { useState } from 'react';
import { textStyle, buttonStyle } from './dimensions';
import {
    trial_ids
} from './randomizedParameters';

import bx2n from './bx2n.png';
import bx2w from './bx2w.png';
import sy3n from './sy3n.png';
import sy3w from './sy3w.png';

const Transition = (props) => {
    const condition = props.condition;
    const img = condition === "bx2n" ? bx2n :
        condition === "bx2w" ? bx2w :
            condition === "sy3n" ? sy3n :
                condition === "sy3w" ? sy3w : NaN;

    const pic = <img src={img} style={{ width: "60vw" }} />

    const conditionLabel = condition.substring(0, 3).toUpperCase();
    const upperText = <div>
        <p>Here are the results of a study about another hormone, called <b>{conditionLabel}</b>.</p>
        <p>As before, the graph represents the number of people with a given concentration of the hormone in their blood:</p>

    </div>

    const lowerText = <div>
        <p>Suppose we picked a person from the population at random.
            You don't know how much {conditionLabel} that person has in their blood, but you have to guess. What would you say?</p>
        <p>In the next few pages we will show you possible guesses you could make.
            Each page will have two possible choices. Please tell us what you would prefer to say.</p>

        <p>Note that there will be little color marks on the graph. They are meant to illustrate the options we give you -- they do not provide extra information about the study results.</p>
    </div>

    const handleClick = () => {
        if (props.trialNumber == trial_ids.length - 1) {
            //setTrialNumber(0);
            props.incrementTest((props.testNumber));
        }
        props.incrementTrial(props.trialNumber);
    }
    const button = <button style={buttonStyle}
        onClick={() => handleClick()}>Next</button>;

    return (
        <div style={textStyle}>
            <br></br>
            {upperText}
            {pic}
            {lowerText}
            {button}<br></br>
        </div>
    )
}

export default Transition;