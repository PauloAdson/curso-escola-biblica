import React from "react";
import { NavLink } from "react-router-dom";
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
                        <NavLink to='/curso'>
                            <img src={logo} alt="Logo EBD" />
                        </NavLink>

                        <div className="curso_usuario">
                            <span className="curso_usuario-nome">Olá, {this.state.user} </span><i class="fa-solid fa-user curso_usuario-icone" />
                        </div>
                    </nav>
                </header>
                <aside className="curso_menu-lateral">
                    <nav className="curso_menu-lateral-nav">

                        <div className="curso_menu-container-icone">
                            <NavLink to='/curso' className='curso_menu-links' activeClassName='active'>
                                <i className="fa-solid fa-house" /> Início
                            </NavLink>
                        </div>

                        <div className="curso_menu-container-icone">
                            <NavLink to='/aulas' className='curso_menu-links' activeClassName='active'>
                                <i className="fa-solid fa-book" /> Aulas
                            </NavLink>
                        </div>

                        <div className="curso_menu-container-icone">
                            <NavLink to='/atividades' className='curso_menu-links' activeClassName='active'>
                                <i className="fa-solid fa-pen" /> Atividades
                            </NavLink>
                        </div>

                        <div className="curso_menu-container-icone">
                            <NavLink to='/ajuda' className='curso_menu-links' activeClassName='active'>
                                <i className="fa-solid fa-circle-info" /> Ajuda
                            </NavLink>
                        </div>

                        <div className="curso_menu-container-icone">
                            <NavLink to='/login' className='curso_menu-links' activeClassName='active' onClick={(event) => this.handleLogout(event)}>
                                <i className="fa-solid fa-right-from-bracket rotate-logout" /> Sair
                            </NavLink>
                        </div>

                    </nav>
                </aside>
            </>
        );
    }
}