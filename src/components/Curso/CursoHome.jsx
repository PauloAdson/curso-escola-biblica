import React from "react";
import { CursoMenu } from "./CursoMenu";

export class CursoHome extends React.Component {

    constructor() {
        super();
        this.state = {
            user: localStorage.getItem('user')
        };
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