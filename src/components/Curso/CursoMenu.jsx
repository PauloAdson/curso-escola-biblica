import React from "react";
import logo from '../../assets/images/logo.svg';
import './stylesMenu.css';
import iconHouse from '../../assets/images/house-solid.svg';

export class CursoMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            user: localStorage.getItem('user')
        };
    }
    render() {
        return (
            <>
                <header className="curso_header">
                    <nav className="curso_menu">
                        <a href="/curso">
                            <img src={logo} alt="Logo EBD" />
                        </a>

                        <div className="curso_usuario">
                            <span className="curso_usuario-nome">Olá, {this.state.user}</span>
                        </div>
                    </nav>
                </header>
                <aside className="curso_menu-lateral">
                    <nav className="curso_menu-lateral-nav">
                        <div className="curso_menu-container-icone">
                            <img src={iconHouse} alt="icone de uma casa" className="curso_menu-icone" />
                            <a href="" className="curso_menu-links">Início</a>
                        </div>
                        <a href="" className="curso_menu-links">Aulas</a>
                        <a href="" className="curso_menu-links">Atividades</a>
                        <a href="" className="curso_menu-links">Ajuda</a>
                        <a href="" className="curso_menu-links">Sair</a>
                    </nav>
                </aside>
            </>
        );
    }
}