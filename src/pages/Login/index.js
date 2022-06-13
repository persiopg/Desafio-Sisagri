import React from "react";
import Empresa from "../../img/empressa.svg";
import User from "../../img/user.svg";
import Password from "../../img/password.svg";
import logo from "../../img/logo.svg";
import whatsapp from "../../img/whatsapp.svg";
import instagram from "../../img/instagram.svg";
import facebook from "../../img/facebook.svg";
import './style.css';

function App() {    

    function confirm(e){
        e.preventDefault();

        let empresa = document.getElementById("empresa").value;
        let user = document.getElementById("user").value;
        let password = document.getElementById("password").value;

        // verificação para acesso 
        
        if (empresa === "empresa" && user === "user" && password === "senha"){
            return window.location.href = "./Home";
        }
    };
    //hltm login
    return (
        <div className="container-body">
            <div className="logo-container">
                <img src={logo}/>
            </div>            
            <div className="container-login">
                <h2 className="title">Acesse sua conta</h2>
                <form className="form-login">
                    <div className="form-input">
                        <span className="form-label"><img src={Empresa}/></span>
                        <input id="empresa" type="text" 
                        className="input" 
                        placeholder="Empresa"/>
                    </div>

                    <div className="form-input">
                        <span className="form-label"><img src={User}/></span>
                        <input id="user" type="text" 
                        className="input" 
                        placeholder="Usuario"/>
                    </div>

                    <div className="form-input">
                        <span className="form-label"><img src={Password}/></span>
                        <input id="password" type="password"  
                        className="input" 
                        placeholder="Password"/>
                    </div>
                    <div className="form-esqueceu-senha">
                        <a className="esqueceu-senha" href="">Esqueceu sua senha?</a>
                    </div>                   
                    <button className="button-login" type="submit" onClick={confirm}>Login</button>
                </form>
                <div className="form-label-final">
                    <p>Não possui uma conta?</p>
                    <a className="link" href="/">Solicitar cadastro</a>
                </div>                
            </div>
            <div className="text-container">
                <h1>Tecnologia com soluções para o agronegocio</h1>
                <p>
                    Facilitamos a adequação ás legislações referentes a rastreabiidade vegetal,
                    garantido a segurança dos alimentos.
                </p>
                <div className="social-container">
                    <a href=""><img src={facebook}/></a>
                    <a href=""><img src={instagram}/></a>
                    <a href=""><img src={whatsapp}/></a>
                </div>

            </div>
        </div>
    );
};

export default App;