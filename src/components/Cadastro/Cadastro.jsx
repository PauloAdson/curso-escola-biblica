import React from "react";
import './styles.css';
import axios from "axios";
export class Cadastro extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            errorMessage: ''
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, email, password } = this.state;

        axios.post('http://localhost:3001/cadastro', { name, email, password })
            .then(response => {
                this.setState({ successMessage: 'Cadastro realizado com sucesso! ', errorMessage: '' });

                setTimeout(() => {
                    window.location.href = '/login';
                }, 2000);

                console.log('cadastro realizado com sucesso:', response.data);
            })
            .catch(error => {
                this.setState({
                    errorMessage: error.response?.data?.message || 'Erro no cadastro',
                    successMessage: ''
                });
            });
    };

    render() {
        return (
            <>
                <main className="bg-login-cadastro">
                    <div className="container-form-cadastro">
                        <div className="container-title-cadastro">
                            <h1 className="title-form">Faça o seu cadastro</h1>
                            <div className="title-underline-cadastro"></div>
                        </div>

                        <form className="cadastro-form" onSubmit={this.handleSubmit}>
                            <label htmlFor="name">Nome*</label>
                            <input
                                className="input-text"
                                type="text"
                                name="name"
                                id="name"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                required
                            />

                            <label htmlFor="email">Email*</label>
                            <input
                                className="input-text"
                                type="email"
                                name="email"
                                id="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                required
                            />

                            <label htmlFor="password">Senha*</label>
                            <input
                                className="input-text espaco"
                                type="password"
                                name="password"
                                id="password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                required
                            />
                            <div>

                                <input className="checkbox" type="checkbox" name="termos" id="termos" required />
                                <label htmlFor="termos">Aceito os termos de privacidade </label>
                            </div>

                            <button
                                className="espaco"
                                type="submit">Cadastrar-se</button>
                        </form>

                        <p className={`espaco erro ${this.state.errorMessage ? '' : 'hidden'}`}>
                            {this.state.errorMessage}
                        </p>

                        <p className={`espaco success ${this.state.successMessage ? '' : 'hidden'}`}>
                            {this.state.successMessage}
                        </p>

                        <p className="espaco weight">Já tem uma conta? <a href="/login" className="cor-destaque">Entre aqui</a></p>

                        <a href="/" className="cor-destaque weight back-start">Voltar ao ínicio</a>

                    </div>
                </main>
            </>
        );
    }
}