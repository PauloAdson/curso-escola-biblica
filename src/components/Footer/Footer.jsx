import React from "react";
import './styles.css';
import logo from '../../assets/images/logo.svg';

export class Footer extends React.Component {
    render() {
        return (
            <>
                <footer>
                    <div className="footer__container">

                        <div className="footer__logo">
                            <a href="./">
                                <img src={logo} alt="Logo EBD" />
                            </a>
                            <p>
                                Os céus e a terra passarão, mas as<br />
                                minhas palavras jamais passarão.
                            </p>
                        </div>
                        <div className="footer__links">
                            <h4 className="footer__links-titulo">Links Rápidos</h4>
                            <a href="#inicio">Voltar ao início</a>
                            <a href="#duvidas">Dúvidas</a>
                        </div>
                        <div className="footer__links">
                            <h4 className="footer__links-titulo">Contatos</h4>
                            <p>WhatsApp: <a href="https://wa.me/5562995132226" target="_blank">(62)99513-2226</a></p>
                            <p>E-mail: <a href="mailto:paulo.alves200581@gmail.com">paulo.alves200581@gmail.com</a></p>
                        </div>
                    </div>
                </footer>
                <div className="copyright">
                    <p>Desenvolvido por <a href="https://portfolio-pauloadson.vercel.app/" target="_blank">Paulo Adson</a></p>
                </div>
            </>
        );
    }
}