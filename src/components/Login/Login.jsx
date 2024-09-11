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
                <main className="bg-login-cadastro">
                    <div className="container-form-login">
                        <div className="container-title">
                            <h1 className="title-form">Faça o seu login</h1>
                            <div className="title-underline"></div>
                        </div>

                        <form className="login-form" action="">
                            <label htmlFor="email">Email*</label>
                            <input
                                className="input-text"
                                type="email"
                                name="email"
                                id="email"
                                required
                                onChange={this.handleEmailChange} />

                            <label htmlFor="password">Senha*</label>
                            <input
                                className="input-text espaco"
                                type="password"
                                name="password"
                                id="password"
                                required
                                onChange={this.handlePasswordChange} />
                            <div>
                                <input
                                    className="espaco"
                                    type="checkbox"
                                    name="termos"
                                    id="termos" />

                                <label htmlFor="termos">Lembrar-me</label>
                            </div>

                            <button
                                className="espaco"
                                type="submit"
                                onClick={(e) => this.handleLogin(e)}
                            >Entrar</button>
                        </form>

                        {/* <p className="espaco erro">{this.state.errorMessage}</p> */}

                        <p className={`espaco erro ${this.state.errorMessage ? '' : 'hidden'}`}>
                            {this.state.errorMessage}
                        </p>

                        <p className="espaco weight">Não possui uma conta? <a href="/cadastro" className="cor-destaque">Criar aqui</a></p>

                        <a href="/" className="cor-destaque weight back-start">Voltar ao ínicio</a>

                    </div>
                </main>
            </>
        );
    }
}

// export default withRouter(Login);