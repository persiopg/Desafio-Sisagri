import React from "react";
import Menu from "../../components/Menu";
import "./styleHome.css";
import whatsapp from "../../img/whatsappV.svg";
import instagram from "../../img/instagramV.svg";
import facebook from "../../img/facebookV.svg";
import um from "../../img/um.svg";
import dois from "../../img/dois.svg";
import tres from "../../img/tres.svg";
import location from "../../img/location.svg";
import grafico from "../../img/grafico.svg";
import servicos from "../../img/servicos.svg";
import trator from "../../img/trator.svg";

const page = () => {
	//page home
	return (
		<div className="home">
			<Menu />
			<div className="conteudo">
				<div className="Conteudo-top">
					<h1 className="conteudo-top-title">Olá</h1>
					<form className="conteudo-top-pesquisa">
						<input
							type="text"
							className="pesquisa"
							placeholder="Faça uma esquisa"
						/>
					</form>
					<div className="Conteudo-top-social">
						<a href="">
							<img src={facebook} />
						</a>
						<a href="">
							<img src={instagram} />
						</a>
						<a href="">
							<img src={whatsapp} />
						</a>
					</div>
				</div>
				<div className="container-conteudo">
					<div className="conteudo-mid">
						<div className="conteudo-mid-graf">
							<img src={grafico} />
						</div>
						<div className="conteudo-mid-tabelas">
							<div className="conteudo-mid-talhoes">
								<h3>Talhões</h3>
								<p>Mais utilizados</p>
								<div className="conteudo-mid-talhoes-tabela">
									<ul>
										<li>
											<img src={um} />
											Abrigo
										</li>
										<li>
											<img src={dois} />
											Campo verde
										</li>
										<li>
											<img src={tres} />
											Abrigo
										</li>
									</ul>
								</div>
								<div className="ver-todos">
									<a href="">Ver todos {">"}</a>
								</div>
							</div>
							<div className="conteudo-mid-safras">
								<h3>Safras</h3>
								<p>Acessados recentemente</p>
								<div className="conteudo-mid-safras-tabela">
									<ul>
										<li>
											<img src={location} />
											Abrigo - Uva Vitoria
											<br />
											Area 1.2ha - Plantio: 20/04/2022
										</li>
										<li>
											<img src={location} />
											Abrigo - Uva Vitoria
											<br />
											Area 1.2ha - Plantio: 20/04/2022
										</li>
										<li>
											<img src={location} />
											Abrigo - Uva Vitoria
											<br />
											Area 1.2ha - Plantio: 20/04/2022
										</li>
									</ul>
								</div>
								<div className="ver-todos">
									<a href="">Ver todos {">"}</a>
								</div>
							</div>
						</div>
					</div>
					<div className="conteudo-left">
						<aside className="conteudo-left-list">
							<h3>Atividades recentes</h3>
							<div className="conteudo-left-list-container">
								<ul>
									<li>
										<img src={servicos} />
										Abrigo - Uva Vitoria
										<br />
										07/12/2022 - Capina Manual <br />
										2h x 8.00 = R$16.00
									</li>
									<li>
										<img src={trator} />
										Uva - isis
										<br />
										21/03/2022 - 1.90.20220321
										<br />
										Quantidade = 75
									</li>
									<li>
										<img src={servicos} />
										Abrigo - Uva Vitoria
										<br />
										07/12/2022 - Capina Manual <br />
										2h x 8.00 = R$16.00
									</li>
									<li>
										<img src={trator} />
										Uva - isis
										<br />
										21/03/2022 - 1.90.20220321
										<br />
										Quantidade = 75
									</li>
									<li>
										<img src={servicos} />
										Abrigo - Uva Vitoria
										<br />
										07/12/2022 - Capina Manual <br />
										2h x 8.00 = R$16.00
									</li>
									<li>
										<img src={servicos} />
										Abrigo - Uva Vitoria
										<br />
										07/12/2022 - Capina Manual <br />
										2h x 8.00 = R$16.00
									</li>
									<li>
										<img src={servicos} />
										Abrigo - Uva Vitoria
										<br />
										07/12/2022 - Capina Manual <br />
										2h x 8.00 = R$16.00
									</li>
									<li>
										<img src={servicos} />
										Abrigo - Uva Vitoria
										<br />
										07/12/2022 - Capina Manual <br />
										2h x 8.00 = R$16.00
									</li>
									<li>
										<img src={servicos} />
										Abrigo - Uva Vitoria
										<br />
										07/12/2022 - Capina Manual <br />
										2h x 8.00 = R$16.00
									</li>
								</ul>
							</div>
							<div className="ver-todos">
								<a href="">Ver todos {">"}</a>
							</div>
						</aside>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
