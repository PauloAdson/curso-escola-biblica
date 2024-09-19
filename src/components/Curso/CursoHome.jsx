import React from "react";
import { CursoMenu } from "./CursoMenu";
import './styles.css';
import { BlocoMenor, BlocoMenorLink } from "./BlocoMenor";

export class CursoHome extends React.Component {

    constructor() {
        super();
        this.state = {
            user: localStorage.getItem('user')
        };
    }

    render() {

        return (
            <>
                <CursoMenu />
                <main className="curso_main">
                    <h1 className="curso_titulo">Início</h1>
                    <section className="curso_section-blocos">
                        <BlocoMenor
                            tituloBloco="Lição atual 1: "
                            tituloSublinhado="Exortações à perseverança"
                            tituloSecundario="Introdução"
                            textoPrincipal="A carta aos Hebreus nos traz à memória sobre quem é Jesus, Sua Obra salvífica e exortações sobre permanecermos firmes nas Suas promessas." />

                        <BlocoMenor
                            tituloBloco="Leitura Semanal"
                            tituloSublinhado=""
                            tituloSecundario="Seg | 2Pe 1.21"
                            textoPrincipal="Deus se revelou aos homens através de Sua Palavra." />

                        <BlocoMenorLink
                            tituloBloco="Aula 1:"
                            tituloSublinhado="Exortações à perseverança"
                            tituloSecundario=""
                            textoPrincipal="Ao concluir a aula, você poderá realizar a atividade! "
                            linkConteudo='Começar Agora' />

                        <BlocoMenorLink
                            tituloBloco="Atividade 1:"
                            tituloSublinhado="Exortações à perseverança"
                            tituloSecundario=""
                            textoPrincipal="Realize o a atividade e teste o que você aprendeu! "
                            linkConteudo='Começar Agora' />

                        <BlocoMenor
                            tituloBloco="Resumo"
                            tituloSublinhado=""
                            tituloSecundario="Eu aprendi que:"
                            textoPrincipal="A Carta aos Hebreus é um sermão com características de carta, que relembra a igreja que é Jesus, Sua Obra e a salvação por Ele oferecida." />

                    </section>
                </main>
            </>
        );
    }
}