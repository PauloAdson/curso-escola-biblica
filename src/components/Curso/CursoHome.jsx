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
                    <section>
                        <BlocoMenor tituloBloco="Lição atual 1: " tituloSublinhado="Exortações à perseverança" />

                        <BlocoMenor tituloBloco="Leitura Semanal" />
                        <BlocoMenor tituloBloco="Leitura Semanal" />
                        <BlocoMenor tituloBloco="Leitura Semanal" />
                        <BlocoMenor tituloBloco="Leitura Semanal" />
                        <BlocoMenor tituloBloco="Leitura Semanal" />
                        <BlocoMenor tituloBloco="Leitura Semanal" />
                    </section>
                </main>
            </>
        );
    }
}