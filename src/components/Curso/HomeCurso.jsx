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
        localStorage.removeItem('user');
        localStorage.removeItem('auth');
        this.setState({ user: null, email: '', password: '' });
        window.location.href = '/login';
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