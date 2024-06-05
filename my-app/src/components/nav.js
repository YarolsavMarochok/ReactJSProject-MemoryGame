import React from "react";
import './main/main.css';
import {BrowserRouter as Router, Link, Routes} from 'react-router-dom';

export default function Nav(){
    
    return(
        <header>
            <p>This is final project game 'Remember'</p>
            <p><Link to="/">HOME</Link></p>
        </header>
    )
}