import React from "react";
import './stylestest.css';

export class Logintest extends React.Component {
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
                                required />

                            <label htmlFor="password">Senha*</label>
                            <input
                                className="input-text espaco"
                                type="password"
                                name="password"
                                id="password"
                                required />
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
                            >Entrar</button>
                        </form>

                        <p className="espaco weight">Não possui uma conta? <a href="/cadastro" className="cor-destaque">Criar aqui</a></p>

                        <a href="/" className="cor-destaque weight">Voltar ao ínicio</a>

                    </div>
                </main>
            </>
        );
    }
}