import React from "react";
import './styles.css';
import minusIcon from '../../assets/images/minus-icon.svg';
import plusIcon from '../../assets/images/plus-icon.svg';

export class Sanfona extends React.Component {
    constructor() {
        super();
        this.state = { active: false };
    };

    toggleClass = () => {
        this.setState({ active: !this.state.active });
    };

    render() {
        const { active } = this.state;

        return (
            <>
                <div onClick={this.toggleClass} className={active ? 'container-duvidas__sanfona active' : 'container-duvidas__sanfona'}>
                    <div className="duvidas__sanfona">
                        <div className="duvidas__sanfona-titulo">
                            <span className="duvidas__sanfona-numero">{this.props.tituloNumeroSanfona}</span>
                            <h3>{this.props.tituloSanfona}</h3>
                        </div>
                        <img className="" src={active ? minusIcon : plusIcon} alt="" />
                    </div>
                    <div className="container-conteudo">
                        <p className={active ? 'conteudo active' : 'conteudo'}>{this.props.duvidasResposta}</p>
                    </div>
                </div>
            </>
        );
    }
}