import React from "react";
import axios from "./axios.js";
import { Link } from "react-router-dom";

export default class Registration extends React.Component {
    constructor() {
        super();

        this.state = {
            firstname: "Andi",
            lastname: "",
            email: "",
            password: "",
            error: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        axios
            .post("/register", this.state)
            .then(() => {
                location.replace("/");
            })
            .catch(() => {
                this.setState({
                    error: true,
                });
            });

        console.log("FORM SUBMITTED", this.state);
    }

    handleChange(e) {
        console.log("handleChange", e.target.name, e.target.value);

        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <img src="logo2.png" />
                <h2>
                    Join our network to see the next and share your thoughts
                    with your friends!{" "}
                </h2>
                {this.state.error && (
                    <p>Ooopss! Something missing, please try agin.</p>
                )}
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="firstname"
                        onChange={this.handleChange}
                        value={this.state.firstname}
                        placeholder="Firstname"
                    />
                    <input
                        type="text"
                        name="lastname"
                        onChange={this.handleChange}
                        value={this.state.lastname}
                        placeholder="Lastname"
                    />
                    <input
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        placeholder="E-mail"
                    />
                    <input
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        placeholder="Password"
                    />
                    <button type="submit">Create Account</button>
                </form>
                <Link to="/login">
                    <p>You have already have an account?</p>
                </Link>
            </div>
        );
    }
}
