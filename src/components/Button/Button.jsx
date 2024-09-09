import React from "react";
import './styles.css';

export class Button extends React.Component {
    render() {
        return (
            <a className={this.props.estilo} href={this.props.link}>{this.props.texto}</a>
        );
    }
}