import React,{useState} from "react";
import Empresa from "../../img/empressa.svg";
import User from "../../img/user.svg";
import Password from "../../img/password.svg";
import logo from "../../img/logo.svg";
import whatsapp from "../../img/whatsapp.svg";
import instagram from "../../img/instagram.svg";
import facebook from "../../img/facebook.svg";
import './style.css';

function App() {    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");

    return (
        <div className="container-body">
            <div className="logo-container">
                <img src={logo}/>
            </div>            
            <div className="container">
                <h2 className="title">Acesse sua conta</h2>
                <form className="form-login">
                    <div className="form-input">
                        <span className="form-label"><img src={Empresa}/></span>
                        <input type="email" 
                        className="input" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        placeholder="Empresa"/>
                    </div>

                    <div className="form-input">
                        <span className="form-label"><img src={User}/></span>
                        <input type="text" 
                        className="input" 
                        value={userName} 
                        onChange={e => setUserName(e.target.value)} 
                        placeholder="Usuario"/>
                    </div>

                    <div className="form-input">
                        <span className="form-label"><img src={Password}/></span>
                        <input type="password" 
                        className="input" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                        placeholder="Password"/>
                    </div>
                    <div className="form-esqueceu-senha">
                        <a className="esqueceu-senha" href="">Esqueceu sua senha?</a>
                    </div>                   
                    <button className="button-login" type="submit">Login</button>
                </form>
                <div className="form-label-final">
                    <p>Não possui uma conta?</p>
                    <a className="link" href="/home">Solicitar cadastro</a>
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