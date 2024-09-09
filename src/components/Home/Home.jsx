import React from "react";
import './styles.css';
import { Button } from "../Button/Button";
import { Sanfona } from "./Sanfona";

export class Home extends React.Component {
    render() {
        return (
            <>
                <main className="bg-main">
                    <section className="main-inicio">
                        <h1 className="titulo uppercase">Venha aprender mais <br className="mobile-none" />
                            sobre a Bíblia
                        </h1>
                        <p className="uppercase">Através de lições Bíblicas</p>
                        <Button estilo="btn-destaque cadastro" link="/cadastro" texto="Começar Agora" />
                    </section>
                </main>

                <section className="visao-geral-curso">
                    <h2 className="section-titulo">Descubra a Profundidade das Escrituras</h2>
                    <div className="visao-geral-curso__conteudo">
                        <p className="visao-geral-curso__conteudo-paragrafo">
                            Nosso curso de estudo bíblico foi desenvolvido para todos aqueles que desejam aprofundar seu conhecimento e entendimento da Bíblia Sagrada. Seja você um iniciante ou alguém que já possui um conhecimento sólido das Escrituras, nosso curso  oferece um ambiente enriquecedor para explorar a Palavra de Deus de maneira profunda e significativa.
                        </p>
                        <img className="visao-geral-curso__conteudo-img mobile-none" src="https://raw.githubusercontent.com/PauloAdson/escola-biblica/main/src/assets/images/imagem-bliblia.png" alt="imagem de uma bíblia" />
                    </div>
                    <Button estilo="btn-destaque cadastro" link="/cadastro" texto="Começar Agora" />
                </section>

                <section id="duvidas" className="duvidas">
                    <h2 className="section-titulo">Por Que Estudar a Bíblia?</h2>
                    <div>
                        <Sanfona tituloNumeroSanfona="01" tituloSanfona="Crescimento Espiritual" duvidasResposta="Aprofundar-se nas Escrituras fortalece sua fé e relacionamento com Deus." />
                        <Sanfona tituloNumeroSanfona="02" tituloSanfona="Conhecimento" duvidasResposta="Entender o contexto histórico e cultural da Bíblia proporciona uma visão mais clara das suas mensagens." />
                        <Sanfona tituloNumeroSanfona="03" tituloSanfona="Aplicação Prática" duvidasResposta=" Aprenda a aplicar os ensinamentos bíblicos em sua vida cotidiana, transformando seu comportamento e atitudes." />
                    </div>
                </section>

            </>
        );
    }
}