import React from "react";
import { NavLink } from "react-router-dom";

export class BlocoMenor extends React.Component {
    render() {
        return (
            <div className="curso_bloco-container">
                <h2 className="curso_bloco-titulo">{this.props.tituloBloco} <span>{this.props.tituloSublinhado}</span></h2>
            </div>
        );
    }
}

export class BlocoMenorLink extends React.Component {
    render() {
        return (
            <NavLink to={this.props.linkBloco}>
                <div className="curso_bloco-container">
                    <h2 className="curso_bloco-titulo">{this.props.tituloBloco} <span>{this.props.tituloSublinhado}</span></h2>
                </div>
            </NavLink>
        );
    }
}