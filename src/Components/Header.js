import React from 'react';
import { BsFillCursorFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

import '../App.css';

function Welcome(props) {
    return (
        <header id="home">
            <br></br>
            <p>Welcome to my online CV</p>
            <p><strong>Evans Ejike</strong></p>
            <p>Technical Support Engineer</p>

            <p className="subparagraph"> <BsFillCursorFill /> Cape Town, South Africa</p>
            <p className="subparagraph"> <BsFillEnvelopeFill /><a href = "mailto: kciano.kc@gmail.com"> kciano.kc@gmail.com</a></p>
            <a href = "https://www.linkedin.com/in/evans-ejike-67930572/"><FaLinkedin /></a><a href = "https://github.com/kciano"><AiFillGithub /></a>

        </header>
        )
    }

    export default Welcome;