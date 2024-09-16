import React from "react";
import { CursoMenu } from "./CursoMenu";

export class CursoHome extends React.Component {

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
                <CursoMenu />
 
                {/* <button
                    type="button"
                    href='./'
                    onClick={(event) => this.handleLogout(event)}
                >Sair</button> */}

            </>
        );
    }
}