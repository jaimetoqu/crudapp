import React from 'react';
import axios from "axios";
import {observable} from "mobx";

class ContactScreen extends React.Component {

    constructor(props) {
        super();
        this.state = {
            persons: []
        }
        this.baseUrl = "https://jsonplaceholder.typicode.com";
        // @observable showModal = false;
    }

    submit(e) {
        e.preventDefault();
        let person = {
            name: this.refs.name.value,
            username: this.refs.username.value,
            email: this.refs.email.value,
            phone: this.refs.phone.value,
            website: this.refs.website.value,

        }
        axios.post(this.baseUrl + '/users', {person}).then(response => {
            console.log(response.data);
        })
        .catch(response => {
            console.log(response);
        });

    }

    render() {
        return (
            <div>Contact
                <form ref="myForm">
                    <input type="text" placeholder="Full Name" ref="name"/>
                    <input type="text" placeholder="Username" ref="username"/>
                    <input type="text" placeholder="Email" ref="email"/>
                    <input type="number" placeholder="phone" ref="phone"/>
                    <input type="text" placeholder="website" ref="website"/>
                    <button onClick={(e) => this.submit(e)} >Submit</button>
                </form>
            </div>
        );
    }
}

export default ContactScreen;