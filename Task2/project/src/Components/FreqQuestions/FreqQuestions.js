import { Content } from "../Content/Content";
import { useState } from "react";

const questions = [
    { question: "How much time does it take?", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { question: "What is your class naming convention?", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { question: "How do you communicate?", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { question: "I have a bigger project. Can you handle it?", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { question: "What is your class naming convention?", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
];

function Question({ question, text, ind }) {
    const [textState, setTextState] = useState("none");
    const [markState, setMark] = useState("0deg");

    const clickEvent = () => {
        if(textState == "none") {
            setTextState("block");
            setMark("45deg");
        } else {
            setTextState("none");
            setMark("0deg");
        } 
    }
    return (
        <div id="enumerable" className="flex-container flex-container-nowrap gap-30">
            <p className="medium-rare-text aware-text">0{ind + 1}</p>
            <p >
                <span className="big-text">{question}</span> <br /> <br />

                <span id="automatic.changeableTextFreqQuestion" className="small-text" style={{ display: textState }}>{text}</span>
            </p>
            <p id="automatic.changeableTextExploreButt" onClick={clickEvent} className="flex-right small-text plus-button" style={{rotate: markState}}>
                +
            </p>
        </div>
        
    )
}

export function FreqQuestions(props) {
    return (
        <Content additionalClasses="w-100">
            <div className="flex-container flex-container-col">
                {
                    questions.map((item, ind) => {
                        console.log("Text")
                        return (
                            <Question question={item.question} text={item.text} ind={ind}></Question>
                        )
                    })
                }

            </div>
        </Content>
    )
}