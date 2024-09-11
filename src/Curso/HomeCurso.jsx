import React from "react";

export class HomeCurso extends React.Component {

    constructor() {
        super();
        this.state = {
            user: localStorage.getItem('user')
        };
    }
    handleLogout = async (event) => {
        event.preventDefault();
        this.setState({ user: null, email: '', password: '' });
        window.location.href = '/';
    }

    render() {

        return (
            <>
                <h3>Olá, {this.state.user} </h3>
                <p>teste</p>
                <button
                    type="button"
                    href='./'
                    onClick={(event) => this.handleLogout(event)}
                >Sair</button>
            </>
        );
    }
}