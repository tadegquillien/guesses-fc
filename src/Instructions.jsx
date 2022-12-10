//this component displays instructions

import { useRef, useState } from 'react';

import { shuffle } from './convenienceFunctions';
import {
    circle_ids, color_palette, mode, urn_ids, urn_letters, PROBS, colors, actualWorld,
    threshold
} from './gameParameters';

import { r } from './dimensions';
import './Instructions.css'
import { textStyle, buttonStyle } from './dimensions';
import Data from './Data';

import instructions1 from './instructions1.png';



const Instructions = (props) => {
    //keeps track of the current page
    const [trialNumber, setTrialNumber] = useState(0);

    //update the page number
    const incrementTrial = () => {
        setTrialNumber((a) => a + 1);
    }

    //the dimensions for some of the text
    const localTextStyle = {
        display: "flex",
        flexDirection: "column",
        //justifyContent: "center",
        alignItems: "center",
        textAlign: "left",
        //minHeight: "100vh",
        marginLeft: "10vw",
        marginRight: "10vw",
        fontSize: "20px",
    }

    //the props we will pass on to each page
    const tutorialProps = {
        setCurrentPhase: props.setCurrentPhase,
        incrementTrial: incrementTrial,
        localTextStyle: localTextStyle
    };



    //the list of pages
    const instructionTrials = [<Intro {...tutorialProps} />,
    <IntroTwo {...tutorialProps} />,
    <IntroThree {...tutorialProps} />,
    <IntroFour {...tutorialProps} />,
    <IntroFive {...tutorialProps} />,
    <IntroSix {...tutorialProps} />,
    <IntroX {...tutorialProps} />
    ];


    //display the current page
    return (
        instructionTrials[trialNumber]
    )

}

//the first page
const Intro = (props) => {
    return (
        <span style={textStyle}
        >
            <p style={{ color: "red" }}>(Please do not refresh the page during the study -- you would be unable to complete the experiment)</p>
            <br></br>
            <p>In this study, we will show you the results of some fictional scientific studies,
                and we will ask you what guesses you think one could make on the basis of these results.
            </p>
            <p>In each study, researchers discovered a new hormone,
                and tested the concentration of this hormone in a large number of people.
            </p>


            <button style={buttonStyle} onClick={() => props.incrementTrial()}>click to continue</button>
            <br></br>
        </span>
    )
}


//the second page
const IntroTwo = (props) => {

    //when the participant clicks on 'draw', a button appears which allows him
    //to go to the next page
    const nextPageButton =
        <button style={buttonStyle} onClick={() => props.incrementTrial()}>click to continue</button>;

    //display the page
    return (

        <div className="page"
        //style={textStyle}
        >
            <div //className="text" 
                //style={props.localTextStyle}
                style={textStyle}
            >
                <p>For example, imagine that researchers have discovered a new hormone called <b>TZ5</b>.</p>
                <p>They collected blood from a large and diverse sample of participants,
                    and measured the concentration of TZ5 in every subject.</p>
                <p>The study had a very good methodology and we can be confident that it reveals what are the typical blood concentrations of TZ5 in human beings.</p>


                {nextPageButton}
            </div>

        </div>




    )

}

//the third page
const IntroThree = (props) => {

    //when the participant clicks on 'draw', a button appears which allows him
    //to go to the next page
    const nextPageButton =
        <button style={buttonStyle} onClick={() => props.incrementTrial()}>Next</button>;

    const img = instructions1;
    const pic = <img src={img} style={{ width: "50vw" }} />;



    //display the page
    return (

        <div className="page"
        //style={textStyle}
        >
            <div //className="text" 
                //style={props.localTextStyle}
                style={textStyle}
            >
                {pic}
                <p>Here are the results of that study. Each little figure represents 1000 people.</p>
                <p>For example, there were 2000 people who had a concentration of
                    TZ5 between 10 and 12 units.</p>
                <p>The researchers represented this fact by putting 2 little
                    figures between 10 and 12 on the graph.
                </p>
                {nextPageButton}<br></br>
            </div>

        </div>

    )

}


//the fourth page
const IntroFour = (props) => {

    //when the participant clicks on 'draw', a button appears which allows him
    //to go to the next page
    const nextPageButton =
        <button style={buttonStyle} onClick={() => props.incrementTrial()}>Next</button>;

    const img = instructions1;
    const pic = <img src={img} style={{ width: "50vw" }} />;



    //display the page
    return (

        <div className="page"
        //style={textStyle}
        >
            <div //className="text" 
                //style={props.localTextStyle}
                style={textStyle}
            >
                {pic}
                <p>Another example: there are 6 little figures stacked between 16 and 18, meaning that 6000 people
                    had between 16 and 18 units of TZ5 in their blood.
                </p>
                <p>Also, nobody had less than 10 or more than 20 units of TZ5 in their blood.</p>
                {nextPageButton}<br></br>
            </div>

        </div>

    )

}


//the fifth page
const IntroFive = (props) => {

    //when the participant clicks on 'draw', a button appears which allows him
    //to go to the next page
    const nextPageButton =
        <button style={buttonStyle} onClick={() => props.incrementTrial()}>Next</button>;

    const img = instructions1;
    const pic = <img src={img} style={{ width: "50vw" }} />;



    //display the page
    return (

        <div className="page"
        //style={textStyle}
        >
            <div //className="text" 
                //style={props.localTextStyle}
                style={textStyle}
            >
                {pic}
                <p>(Don't worry too much about counting the exact number of people.
                    The useful information is that we can see the typical values of TZ5 for a human being.)
                </p>
                {nextPageButton}<br></br>
            </div>

        </div>

    )

}


//the sixth page
const IntroSix = (props) => {
    const [old, setOld] = useState(0);
    const [moreThan18, setMoreThan18] = useState(0);
    const [comparison, setComparison] = useState(0);
    //when the participant clicks on 'draw', a button appears which allows him
    //to go to the next page
    const nextPageButton =
        <button style={buttonStyle} onClick={() => handleClick()}>Next</button>;

    const img = instructions1;
    const pic = <img src={img} style={{ width: "50vw" }} />;

    const handleClick = () => {
        Data.comprehension.push({
            "old": old,
            "morethaneighteen": moreThan18,
            "comparison": comparison
        })
        props.incrementTrial();
    };

    const handleOld = (e) => {
        setOld(e.target.value)
    }

    const handleMoreThan18 = (e) => {
        setMoreThan18(e.target.value)
    }

    const handleComparison = (e) => {
        setComparison(e.target.value)
    }

    //display the page
    return (

        <div className="page"
        //style={textStyle}
        >
            <div //className="text" 
                //style={props.localTextStyle}
                style={textStyle}
            >
                {pic}
                <p>Please answer the following questions to make sure that you understand.
                </p>

                <form>
                    <label for="old">Old people have higher blood concentrations of TZ5 than young people. </label>
                    <br></br>

                    <select style={{ fontSize: "20px" }} name="old" id="old" onChange={(e) => handleOld(e)}>
                        <option value="NA">  </option>
                        <option value="True">True</option>
                        <option value="False">False</option>
                        <option value="NotEnough">Not enough information</option>
                    </select>
                    <br></br><br></br>

                    <label for="morethan18">Most people have more than 18 units of TZ5 in their blood. </label>
                    <br></br>

                    <select style={{ fontSize: "20px" }} name="morethan18" id="morethan18" onChange={(e) => handleMoreThan18(e)}>
                        <option value="NA">  </option>
                        <option value="True">True</option>
                        <option value="False">False</option>
                        <option value="NotEnough">Not enough information</option>
                    </select>
                    <br></br><br></br>
                    <label for="comparison">The number of people who have 12 to 14 units of TZ5 in their blood is larger than
                        the number of people who have between 14 and 16 units. </label><br></br>

                    <select style={{ fontSize: "20px" }} name="comparison" id="comparison"
                        onChange={(e) => handleComparison(e)}>

                        <option value="NA">  </option>
                        <option value="True">True</option>
                        <option value="False">False</option>
                        <option value="NotEnough">Not enough information</option>


                    </select>
                </form>
                {nextPageButton}<br></br>
            </div>

        </div>

    )

}




//the last page (yet to be filled in)
const IntroX = (props) => {

    //when the participant clicks on 'draw', a button appears which allows him
    //to go to the next page
    const nextPageButton =
        <button style={buttonStyle} onClick={() => props.setCurrentPhase("test")}>click to start the task</button>;

    const img = instructions1;
    const pic = <img src={img} style={{ width: "50vw" }} />;



    //display the page
    return (

        <div className="page"
        //style={textStyle}
        >
            <div //className="text" 
                style={textStyle}
            >

                <p>We will now show you the results of two other studies,
                    in which researchers studied <b>other hormones.</b></p>

                {nextPageButton}<br></br>
            </div>

        </div>

    )

}



export default Instructions;