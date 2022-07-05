import React from "react";
import logo from "../img/logo.svg";
import graph from "../img/graph.svg";
import propriedade from "../img/propriedade.svg";
import cultivo from "../img/cultivo.svg";
import servicos from "../img/servicos.svg";
import insumos from "../img/insumos.svg";
import clients from "../img/clients.svg";
import safras from "../img/safras.svg";
import aplicacoes from "../img/aplicacoes.svg";
import vendas from "../img/vendas.svg";
import perdas from "../img/perdas.svg";
import movimentos from "../img/movimentos.svg";
import relatorios from "../img/relatorios.svg";
import estoque from "../img/estoque.svg";
import config from "../img/config.svg";
import sair from "../img/sair.svg";
import "./Menu.css";
function Menu (){
	return (
		<div  className="menu">
			<aside> 
				<div className="logo-menu">
					<img src={logo}/>
				</div> 
				<div className="separador"></div>
				<div className="empresa">
					<h2 className="nomeEmpresa">Empresa</h2>
					<p className="cnpj">12.345.678/0001-23</p>
				</div>
				<ul className="menu-list">
					<li className="menu-item"><a href="/home"><img className="item-img" src={graph}/>Painel de controle</a></li>
					<li className="menu-item"><a href="/home"><img className="item-img" src={propriedade}/>Propiedades</a></li>
					<li className="menu-item"><a href="/home"><img className="item-img" src={cultivo}/>Culivo</a></li>
					<li className="menu-item"><a href="/home"><img className="item-img" src={servicos}/>Serviços</a></li>
					<li className="menu-item"><a href="/home"><img className="item-img" src={insumos}/>Insumos</a></li>
					<li className="menu-item"><a href="/home"><img className="item-img" src={clients}/>Clientes</a></li>
					<li className="menu-item"><a href="/home"><img className="item-img" src={safras}/>Safra</a></li>
					<li className="menu-item"><a href="/home"><img className="item-img" src={aplicacoes}/>Aplicações</a></li>
					<li className="menu-item"><a href="/home"><img className="item-img" src={vendas}/>Vendas</a></li>
					<li className="menu-item"><a href="/home"><img className="item-img" src={perdas}/>Perdas</a></li>
					<li className="menu-item"><a href="/home"><img className="item-img" src={movimentos}/>Movimentos</a></li>
					<li className="menu-item"><a href="/home"><img className="item-img" src={relatorios}/>Relatorios</a></li>
					<li className="menu-item"><a href="/home"><img className="item-img" src={estoque}/>Estoque</a></li>
				</ul>
				<ul className="footer-menu">
					<li className="menu-item"><a href="/home"><img className="item-img" src={config}/>Configurações</a></li>
					<li className="menu-item"><a href="/"><img className="item-img" src={sair}/>Sair da conta</a></li>
				</ul>
			</aside>
		</div>
	);
}

export default Menu;