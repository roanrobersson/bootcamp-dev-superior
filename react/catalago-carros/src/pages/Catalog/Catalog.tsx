import ProductCard from "../../components/ProductCard";
import SearchButton from "../../components/SearchButton";

const Catalog = () => {
	return (
		<div className="container my-4">
			<SearchButton />
			<div className="row">
				<div className="col-sm-6 col-lg-4 col-xl-4">
					<ProductCard />
				</div>
				<div className="col-sm-6 col-lg-4 col-xl-4">
					<ProductCard />
				</div>
				<div className="col-sm-6 col-lg-4 col-xl-4">
					<ProductCard />
				</div>
				<div className="col-sm-6 col-lg-4 col-xl-4">
					<ProductCard />
				</div>
				<div className="col-sm-6 col-lg-4 col-xl-4">
					<ProductCard />
				</div>
				<div className="col-sm-6 col-lg-4 col-xl-4">
					<ProductCard />
				</div>
			</div>
		</div>
	);
};

export default Catalog;
