import React from 'react';
import axios from "axios";
import {observable} from "mobx";

export default class MessageModal extends React.Component {

    constructor(props) {
        super();
        this.state = {
            openMsg: false,
            person: {},
            simpleText: "messageeee"
        }
    }

    // async componentWillReceiveProps(nextProps) {
    //     await this.setState({
    //       openMsg: nextProps.openModal,
    //       user: nextProps.person
    //     });
    //   }

    submit(e) {
        e.preventDefault();
        let person = {
            name: this.refs.name.value,
            message: this.refs.message.value
        }
    }

    hide() {
        let ab = "messageeee";
        this.props.openMessage(this.state.simpleText);   
        if (this.state.simpleText === "messageeee") {
            // this.props.openMessage esto es el atributo del MessageModal html
            this.setState({
                simpleText: "contactttt"
            });
        } else {
            this.setState({
                simpleText: "messageeee"
            })
        }
    }

    render() {
        return (
            <div>Message
                <form ref="myForm">
                    <input type="text" placeholder="Full Name" ref="name"/>
                    <textarea rows="4" cols="50" ref="message"></textarea>
                    <button onClick={(e) => this.submit(e)} >Submit</button>
                </form>
                <button onClick={this.hide.bind(this)} >Hide</button>
            </div>
        );
    }
}