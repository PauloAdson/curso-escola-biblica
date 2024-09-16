import React from "react";
import logo from '../../assets/images/logo.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom";

export class HeaderCurso extends React.Component {
    render() {
        return (
            <>
                <header className="header_curso">
                    <nav className="menu_curso">
                        <a href="/curso">
                            <img src={logo} alt="Logo EBD" /></a>
                    </nav>
                </header>
            </>
        );
    }
}