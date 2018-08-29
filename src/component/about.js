import React from "react";
import axios from "axios";

export default class AboutScreen extends React.Component {

    constructor(props) {
        super();
        this.state = {
            persons: []
        };
        this.people = [];
        this.baseUrl = "https://jsonplaceholder.typicode.com";
    }

    componentDidMount() {
        this.getPersons();
    }

    getPersons() {
        axios.get(this.baseUrl + '/users').then(response => {
            console.log(response.data);
            this.setState({ persons: response.data });
            this.people = response.data;
        })
        .catch(response => {
            console.log(response);
        });
    }

    submit(e) {
        e.preventDefault();
        let newData = [];
        for (let index = 0; index < this.people.length; index++) {
            if (this.people[index].name.toLowerCase().includes(this.refs.name.value)) {
                console.log("llegue");
                newData.push(this.people[index]);
            }
        }
        this.setState({
            persons: newData
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
