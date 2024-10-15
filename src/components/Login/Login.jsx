import React from "react";
import './styles.css';
import axios from "axios";
// import { withRouter } from 'react-router-dom';

export class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errorMessage: '',
            user: null
        };
    };

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    };

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    };

    handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/login',
                {
                    email: this.state.email,
                    password: this.state.password,
                });


            this.setState({ user: response.data.nome, errorMessage: '' });

            localStorage.setItem('auth', true);

            localStorage.setItem('user', response.data.nome);
            // console.log('Nome do usuário:', response.data.nome);
            window.location.href = '/curso';


        } catch (error) {
            if (!error?.response) {
                console.error('Erro no servidor', error);
                this.setState({ errorMessage: 'Erro no servidor' })

            } else if (error.response.status == 401) {
                console.error('Usuário ou senha inválidos');

                this.setState({ errorMessage: 'Usuário ou senha inválidos' });
                console.log('Usuário ou senha inválidos');
            }
        }
    };

    render() {
        return (
            <>
                <main className="bg_cadastro-login">
                    <div className="login_container">
                        <div className="login_container-title">
                            <h1 className="title-form">Faça o seu login</h1>
                            <div className="title-underline-login"></div>
                        </div>

                        <form className="login_form" action="">

                            <div className="login_form-grupo">

                                <label className="login_form-label" htmlFor="email">Email*</label>
                                <input
                                    className="login_form-input"
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={this.handleEmailChange}
                                    required
                                />
                            </div>

                            <div className="login_form-grupo">
                                <label className="login_form-label" htmlFor="password">Senha*</label>
                                <input
                                    className="login_form-input"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={this.handlePasswordChange}
                                    required
                                />
                            </div>

                            <button
                                className="btn_login-cadastro"
                                type="submit"
                                onClick={(e) => this.handleLogin(e)}
                            >Entrar</button>
                        </form>

                        <p className={` erro ${this.state.errorMessage ? '' : 'hidden'}`}>
                            {this.state.errorMessage}
                        </p>

                        <p className="">Não possui uma conta? <a href="/cadastro" className="">Criar aqui</a></p>

                        <a href="/" className="">Voltar ao ínicio</a>

                    </div>
                </main>
            </>
        );
    }
}