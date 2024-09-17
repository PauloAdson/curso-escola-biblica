import React from "react";
import logo from '../../assets/images/logo.svg';
import './stylesMenu.css';

export class CursoMenu extends React.Component {
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
                <header className="curso_header">
                    <nav className="curso_menu">
                        <a href="/curso">
                            <img src={logo} alt="Logo EBD" />
                        </a>

                        <div className="curso_usuario">
                            <span className="curso_usuario-nome">Olá, {this.state.user} </span><i class="fa-solid fa-user curso_usuario-icone" />
                        </div>
                    </nav>
                </header>
                <aside className="curso_menu-lateral">
                    <nav className="curso_menu-lateral-nav">

                        <div className="curso_menu-container-icone">
                            <a href="/curso" className="curso_menu-links"><i className="fa-solid fa-house curso_menu-links" /> Início</a>
                        </div>

                        <div className="curso_menu-container-icone">
                            <a href="" className="curso_menu-links"><i class="fa-solid fa-book curso_menu-links" /> Aulas</a>
                        </div>

                        <div className="curso_menu-container-icone">
                            <a href="" className="curso_menu-links"><i class="fa-solid fa-pen curso_menu-links" /> Atividades</a>
                        </div>

                        <div className="curso_menu-container-icone">
                            <a href="" className="curso_menu-links"><i class="fa-solid fa-circle-info curso_menu-links" /> Ajuda</a>
                        </div>

                        <div className="curso_menu-container-icone">
                            <a className="curso_menu-links"
                                onClick={(event) => this.handleLogout(event)}
                            ><i class="fa-solid fa-right-from-bracket curso_menu-links rotate-logout" /> Sair</a>
                        </div>

                    </nav>
                </aside>
            </>
        );
    }
}