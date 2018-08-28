import React from "react";
import axios from "axios";

export default class AboutScreen extends React.Component {

    constructor(props) {
        super();
        this.state = {
            persons: []
        };
        this.baseUrl = "https://jsonplaceholder.typicode.com";
    }

    componentDidMount() {
        axios.get(this.baseUrl + '/users').then(response => {
            console.log(response.data);
            this.setState({ persons: response.data });
        })
        .catch(response => {
            console.log(response);
        });
    }

    submit(e) {
        e.preventDefault();
        let person = {
            name: this.refs.name.value
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
            <div>Aboutttt
                <form ref="myForm">
                    <input type="text" placeholder="Full Name" ref="name"/>
                    <button onClick={(e) => this.submit(e)} >Submit</button>
                </form>
                <ul>
                    {this.state.persons.map((person, i) =>
                        <li key={person.id}>
                            {person.id}: {person.name}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}
