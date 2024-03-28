import CardCar from "../../assets/images/card-car.png";

import "./styles.css";

const ProductCard = () => {
	return (
		<div className="base-card product-card">
			<div className="card-top-container">
				<img src={CardCar} alt="Nome do produto" />
				<h6>Audi Supra IT</h6>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
					nisi{" "}
				</p>
				<button>Comprar</button>
			</div>
		</div>
	);
};
export default ProductCard;
