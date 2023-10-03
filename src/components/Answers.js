import React from 'react';
import classes from '../styles/Answers.module.css';
import Checkbox from './CheckBox';

const Answers = () => {
    return (
        <div className={classes.answers} >
           <Checkbox className={classes.answer} text="Test Answer"/> 
        </div>
    );
};

export default Answers;