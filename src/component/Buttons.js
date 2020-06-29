import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Buttons = ({text, backgroundcolor,onClick})=> {
    return (
        <button className="btn" style={{backgroundcolor}} onClick={onClick}>{text}</button>
    );
    Buttons.propTypes ={
        text: PropTypes.string,
        backgroundcolor: PropTypes.string,
        onClick: PropTypes.func
    }
}

export default Buttons;
