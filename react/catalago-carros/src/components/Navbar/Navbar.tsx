import "bootstrap/js/src/collapse.js";
import "./styles.css";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-light main-nav">
			<div className="container-fluid">
				<Link to="/">
					<h4 className="nav-logo-text">Carros Top</h4>
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#carrostop"
					aria-controls="carrostop"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="carrostop">
					<ul className="navbar-nav offset-md-2 main-menu">
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/products">Catálogo</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
