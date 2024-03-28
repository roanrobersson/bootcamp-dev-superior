import { Link } from "react-router-dom";

import SeeCatalogCard from "components/SeeCatalogCard";

import CarImageHome from "../../assets/images/product-car.png";

import "./styles.css";

function Home() {
	return (
		<div className="container my-4">
			<div className="base-card home-card">
				<div className="home-content-container">
					<div>
						<h1>O carro perfeito para você</h1>
						<p>
							Conheça nossos carros e dê mais um passo na realização do seu
							sonho
						</p>
					</div>
				</div>

				<div className="home-image-container">
					<img src={CarImageHome} alt="Imagem carro" />
				</div>
			</div>
			<div>
				{
					<Link to="/products">
						<SeeCatalogCard />
					</Link>
				}
			</div>
		</div>
	);
}

export default Home;
