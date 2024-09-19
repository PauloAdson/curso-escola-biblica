import React from "react";
import { NavLink } from "react-router-dom";

export class BlocoMenor extends React.Component {
    render() {
        return (
            <div className="curso_bloco-container">
                <h2 className="curso_bloco-titulo">{this.props.tituloBloco} <span className="curso_bloco-titulo sublinhado-italico">{this.props.tituloSublinhado}</span></h2>

                <div className="curso_bloco-conteudo">
                    <h3 className="curso_bloco-titulo-secundario">{this.props.tituloSecundario}</h3>
                    <p className="curso_bloco-conteudo-texto">{this.props.textoPrincipal}</p>
                </div>
            </div>
        );
    }
}

export class BlocoMenorLink extends React.Component {
    render() {
        return (
            <NavLink className={'curso_bloco-container-link'} to={this.props.linkBloco}>
                <div className="curso_bloco-container">
                    <h2 className="curso_bloco-titulo">{this.props.tituloBloco} <span className="curso_bloco-titulo sublinhado-italico">{this.props.tituloSublinhado}</span></h2>

                    <div className="curso_bloco-conteudo">
                        <h3 className="curso_bloco-titulo-secundario">{this.props.tituloSecundario}</h3>
                        <p className="curso_bloco-conteudo-texto">{this.props.textoPrincipal}
                            <span className="curso_bloco-link-conteudo">{this.props.linkConteudo}</span>
                        </p>
                    </div>
                </div>
            </NavLink>
        );
    }
}