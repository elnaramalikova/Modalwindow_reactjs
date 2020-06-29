import React, {Component, useState} from 'react';
import Buttons from "./component/Buttons";
import ModalWindow from "./component/ModalWindow";
import "./App.scss"

class App extends Component {
        constructor() {
                super()
                this.state = {
                        show: false
                }
        }
        openModal() {
                this.setState(prevState => (
                    {show: !prevState.show}))
        }
        closeModal(e) {
                if (e.target.id === "modal") {
                        this.setState({show: false})
                }
        }
        render() {
                return (
                    <div className="App">
                            <Buttons className="btn" backgroundcolor="red" onClick={() => this.openModal()} text="Open the first modal "/>
                            <Buttons backgroundcolor="red" onClick={() => this.openModal()} text="Open the second modal "/>
                            {this.state.show && <div id='modal' onClick={(e) => this.closeModal(e)}>
                                    <ModalWindow
                                        header="Do you want to delete this file?"
                                        closeicon={true}
                                        text="Once you delete this file, it won’t be possible to undo this action.
                                            Are you sure you want to delete it?"
                                        actions={[
                                                <div id="btn">
                                                        <Buttons key={1} backgroundcolor="red"
                                                                onClick={() => this.openModal()} text="Add"/>
                                                        <Buttons key={1} backgroundcolor="red"
                                                                onClick={() => this.openModal()} text="Cancel"/>
                                                </div>
                                        ]}

                                    />
                            </div>}


                    </div>
                );
        }
}

export default App;
