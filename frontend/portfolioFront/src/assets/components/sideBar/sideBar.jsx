import React, { useState } from "react";
import './sideBar.css';

const sidebar = () => {
    const [dimensions, setDimensions] = React.useState({
        height: screen.height,
        width: screen.width
    })
    const [btnClicked, setBtnClicked] = useState(true);
    React.useEffect(() => {
        function handleResize() {
            setDimensions({
                height: screen.height,
                width: screen.width
            })
            console.log(`${screen.width}:${screen.height}`)
        }
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })
    const handleClickBtnMobile = (e) => {
        if (btnClicked) {
            let lista = document.getElementById('lista')
            lista.style.display = "block"
        } else {
            lista.style.display = "none"
        }
        setBtnClicked(!btnClicked)
    }
    return <div className="sidebarContainer">
        <a href="./"><img id="logo" src="./src/assets/img/logo.svg" alt="Minha Logomarca" /></a>
        <div className="btnMenu">
            <button id="btnMobile" onClick={handleClickBtnMobile}><img src="./src/assets/img/menu.svg" alt="Botão Mobile" /></button>
        </div>
        <header className="headerContainer">
            <nav className="navContainer">
                <ul className={"listaContainer"} id="lista">
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