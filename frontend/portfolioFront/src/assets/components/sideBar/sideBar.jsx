import React from "react";
import './sideBar.css';

const sidebar = () =>{
    return <div className="sidebarContainer">
        <a href="./"><img id="logo" src="./src/assets/img/logo.svg" alt="Minha Logomarca"/></a>
        <header className="headerContainer">
            <nav className="navContainer">
                <button id="btnMobile"><img src="./src/assets/img/menu.svg" alt="Botão Mobile" /></button>
                <ul className="listaContainer">
                    <li className="opcaoContainer"><a id="sobre" href="">Sobre</a></li>
                    <li className="opcaoContainer"><a id="projetos" href="">Projetos</a></li>
                    <li className="opcaoContainer"><a id="certificacoes" href="">Certificações</a></li>
                    <li className="opcaoContainer"><a id="contato" href="">Contato</a></li>
                </ul>
            </nav>
        </header>
    </div>
}

export default sidebar;