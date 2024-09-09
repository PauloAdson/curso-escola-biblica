import React from "react";
import './stylestest.css';

export class Logintest extends React.Component {
    render() {
        return (
            <>
                <main>
                    <div className="container-form-login ">
                        <div className="title-form">
                            <h1>Faça o seu login</h1>
                            <div className="title-underline"></div>
                        </div>

                        <form className="login-form" action="">
                            <label htmlFor="email">Email*</label>
                            <input type="email"
                                name="email"
                                id="email"
                                required />

                            <label htmlFor="password">Senha*</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                required />

                            <input type="checkbox"
                                name="termos"
                                id="termos" />
                            <label htmlFor="">Lembrar-me</label>

                            <button
                                type="submit"
                            >Entrar</button>
                        </form>
                        <p>Não possui uma conta? <a href="/cadastro">Criar aqui</a></p>

                        <a href="/">Voltar ao ínicio</a>

                    </div>
                </main>
            </>
        );
    }
}