import React from 'react';
import MainHeading from "./MainHeading/MainHeading";
import './Main.css'
import MainBody from "./MainBody/MainBody";

export default function Main(){
    return(
        <div className="Main">
            <MainHeading />
            <MainBody />
        </div>
    )
}