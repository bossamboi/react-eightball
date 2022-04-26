import React, { useState } from "react";

/** */
function Eightball({ answers }) {

    const [color, setColor] = useState("black");
    const [message, setMessage] = useState("Think of a Question");

    function RNG() {
        return Math.floor(Math.random() * answers.length)
    }


    function handleClick() {
        let randomIndex = RNG();
        setColor(answers[randomIndex].color);
        setMessage(answers[randomIndex].msg);
    }

    let styles = {
        backgroundColor: color,
        color: "white",
        width: "400px",
        height: "400px", borderRadius: "50%",
        textAlign: "center",
        lineHeight: "400px" }


    return (
        <div onClick={handleClick} style={styles}>{message}</div>
    );
}

export default Eightball;