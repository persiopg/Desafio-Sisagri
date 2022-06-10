import React from "react";

import logo from "../img/logo.svg";
import facebook from "../img/facebook.svg";

import "./Menu.css";

function Menu (){
    return (
        <aside className="menu"> 
            <div className="logo-menu">
                <img src={logo}/>
            </div> 
            <div className="separador"></div>
            <div className="empresa">
                <h2 className="nomeEmpresa">Empresa</h2>
                <p className="cnpj">12.345.678/0001-23</p>
            </div>
            <ul className="menu-list">
                <li className="menu-item"><a href="/home"><img className="item-img" src={facebook}/>Painel de controle</a></li>
                <li className="menu-item"><a href="/home"><img className="item-img" src={facebook}/>Propiedades</a></li>
                <li className="menu-item"><a href="/home"><img className="item-img" src={facebook}/>Culivo</a></li>
                <li className="menu-item"><a href="/home"><img className="item-img" src={facebook}/>Serviços</a></li>
                <li className="menu-item"><a href="/home"><img className="item-img" src={facebook}/>Insumos</a></li>
                <li className="menu-item"><a href="/home"><img className="item-img" src={facebook}/>Clientes</a></li>
                <li className="menu-item"><a href="/home"><img className="item-img" src={facebook}/>Safra</a></li>
                <li className="menu-item"><a href="/home"><img className="item-img" src={facebook}/>Aplicações</a></li>
                <li className="menu-item"><a href="/home"><img className="item-img" src={facebook}/>Vendas</a></li>
                <li className="menu-item"><a href="/home"><img className="item-img" src={facebook}/>Perdas</a></li>
                <li className="menu-item"><a href="/home"><img className="item-img" src={facebook}/>Movimentos</a></li>
                <li className="menu-item"><a href="/home"><img className="item-img" src={facebook}/>Relatorios</a></li>
                <li className="menu-item"><a href="/home"><img className="item-img" src={facebook}/>Estoque</a></li>
            </ul>
            <ul className="footer-menu">
                <li className="menu-item"><a href="/home"><img className="item-img" src={facebook}/>Configurações</a></li>
                <li className="menu-item"><a href="/"><img className="item-img" src={facebook}/>Sair da conta</a></li>
            </ul>
        </aside>
    );
}

export default Menu;