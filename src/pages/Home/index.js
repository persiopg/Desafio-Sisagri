import React from "react";
import Menu from "../../components/Menu";
import './styleHome.css';


const page = () => {    
    return (
        <div className="home">
            <Menu />
            <div className="conteudo">                
                <h1>Olá</h1>
                <form>
                    <input type="text" className="pesquisa" placeholder="Faça uma esquisa"/>                
                </form>
            </div>
        </div>
    );
};

export default page;
