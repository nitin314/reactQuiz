import { useState } from 'react';
import './OptionsContainer.css';

export default function OptionsContainer(){

    return(
        <div className="OptionsContainer">
            <div className='option'>
                <label for="New Delhi">New Delhi</label>
                <input type="radio" id="New Delhi" name="drone" value="New Delhi" />
            </div>
            <div className='option'>
                <label for="Maharashtra">Maharashtra</label>
                <input type="radio" id="Maharashtra" name="drone" value="Maharashtra"  />
            </div>  
            <div className='option'>
                <label for="Karnataka">Karnataka</label>
                <input type="radio" id="Karnataka" name="drone" value="Karnataka" />
            </div>
            <div className='option'>
                <label for="Orissa">Orissa</label>
                <input type="radio" id="Orissa" name="drone" value="Orissa" />
            </div>
        </div>
    );
}