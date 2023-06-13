import './style.css'
import { useState } from 'react';

export default function CoughButton(props) {

    return (
        <button className="cough-action" onClick={props.coughHandler}>COUGH</button>
    );
}
