import React from "react";
import Menu from "../../components/Menu";
import './styleHome.css';
import whatsapp from "../../img/whatsapp.svg";
import instagram from "../../img/instagram.svg";
import facebook from "../../img/facebook.svg";


const page = () => {    
    return (
        <div className="home">
            <Menu />
            <div className="conteudo">  
                <div className="Conteudo-top">              
                    <h1 className="conteudo-top-title">Olá</h1>
                    <form className="conteudo-top-pesquisa">
                        <input type="text" className="pesquisa" placeholder="Faça uma esquisa"/>                
                    </form>
                    <div className="Conteudo-top-social">
                        <a href=""><img src={facebook}/></a>
                        <a href=""><img src={instagram}/></a>
                        <a href=""><img src={whatsapp}/></a>
                    </div>
                </div>
                <div className="container-conteudo">
                    <div className="conteudo-mid">
                        <div className="conteudo-mid-graf">
                            <img src={facebook}/>
                        </div>
                        <div className="conteudo-mid-tabelas">
                            <ul className="conteudo-mid-talhoes">
                                <li>a</li>
                                <li>a</li>
                                <li>a</li>
                            </ul>
                            <ul className="conteudo-mid-safras">
                                <li>a</li>
                                <li>a</li>
                                <li>a</li>
                            </ul>                            
                        </div>
                    </div>
                    <div className="conteudo-left">
                        <aside>
                            <h3>Atividades recentes</h3>
                            <ul>
                                <li>a</li>
                                <li>a</li>
                                <li>a</li>
                                <li>a</li>
                                <li>a</li>
                                <li>a</li>
                                <li>a</li>
                                <li>a</li>
                                <li>a</li>
                            </ul>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
