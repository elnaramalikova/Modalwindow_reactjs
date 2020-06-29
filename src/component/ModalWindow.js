import React, {Component} from 'react';
import PropTypes from 'prop-types';
const ModalWindow =({header,closeicon, actions, text,close})=> {
        return (
            <div className="mdl">
                    <header>
                            {header}
                            {closeicon && <button onClick={close} className="close">X</button>}
                    </header>
                    <p className="modaltext">{text}</p>
                    {actions}
            </div>
        );

}

export default ModalWindow;
