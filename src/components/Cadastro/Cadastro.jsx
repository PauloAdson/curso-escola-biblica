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
        const { name, email, telefone, password } = this.state;

        axios.post('http://localhost:3001/cadastro', { name, email, telefone, password })
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
                <main className="bg_cadastro-login">
                    <div className="cadastro_container">
                        <div className="cadastro_container-title">
                            <h1 className="title-form">Faça o seu cadastro</h1>
                            <div className="title-underline-cadastro"></div>
                        </div>

                        <form className="cadastro_form" onSubmit={this.handleSubmit}>
                            <div className="cadastro_form-grupo">
                                <label className="cadastro_form-label" htmlFor="name">Nome*</label>
                                <input
                                    className="cadastro_form-input"
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </div>

                            <div className="cadastro_form-grupo">

                                <label className="cadastro_form-label" htmlFor="email">Email*</label>
                                <input
                                    className="cadastro_form-input"
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </div>

                            <div className="cadastro_form-grupo">
                                <label className="cadastro_form-label" htmlFor="telefone">Telefone*</label>
                                <input
                                    className="cadastro_form-input"
                                    type="telefone"
                                    name="telefone"
                                    id="telefone"
                                    value={this.state.telefone}
                                    onChange={this.handleInputChange}
                                    required />
                            </div>

                            <div className="cadastro_form-grupo">
                                <label className="cadastro_form-label" htmlFor="password">Senha*</label>
                                <input
                                    className="cadastro_form-input"
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </div>

                            <div className="cadastro_form-grupo-checkbox">
                                <input className="checkbox" type="checkbox" name="termos" id="termos" required />
                                <label className="cadastro_form-label" htmlFor="termos">Aceito os termos de privacidade*</label>
                            </div>

                            <button
                                className="btn_login-cadastro"
                                type="submit">Cadastrar-se</button>
                        </form>

                        <p className={` erro ${this.state.errorMessage ? '' : 'hidden'}`}>
                            {this.state.errorMessage}
                        </p>

                        <p className={` success ${this.state.successMessage ? '' : 'hidden'}`}>
                            {this.state.successMessage}
                        </p>

                        <p className="">Já tem uma conta? <a href="/login" className="">Entre aqui</a></p>

                        <a href="/" className="">Voltar ao ínicio</a>

                    </div>
                </main>
            </>
        );
    }
}