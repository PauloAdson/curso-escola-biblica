import React from "react";
// import './styles.css';
import axios from "axios";

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
    }

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/login',
                {
                    email: this.state.email,
                    password: this.state.password,
                });

            this.setState({ user: response.data });
            console.log('API', response.data);

            this.setState({ errorMessage: '' });


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

    handleLogout = async (event) => {
        event.preventDefault();
        this.setState({ user: null, email: '', password: '' });
        window.location.href = '/';
    }

    render() {
        return (

            <div className='login-form-wrap'>
                {this.state.user == null ? (

                    <>
                        <h2>Login</h2>

                        <form className='login-form' action="">
                            <input
                                type="email"
                                name='email'
                                placeholder='Email'
                                required
                                onChange={this.handleEmailChange} />

                            <input
                                type="password"
                                name="password"
                                placeholder='Senha'
                                required
                                onChange={this.handlePasswordChange} />

                            <button
                                type="submit"
                                className='btn-login'
                                onClick={(e) => this.handleLogin(e)}
                            >Entrar</button>
                        </form>
                        <p>{this.state.errorMessage}</p>
                    </>
                ) : (

                    <div>
                        <h2>Olá, {this.state.user.nome}</h2>
                        <button
                            type="button"
                            href="./"
                            className="btn-login"
                            onClick={(event) => this.handleLogout(event)}>Logout</button>
                    </div>
                )}
            </div>

        )
    };
};