import "./styles.css";

const SearchButton = () => {
	return (
		<div className="search-container">
			<div className="input-container">
				<input placeholder="Digite sua busca"></input>
			</div>

			<div className="button-container">
				<button> Buscar </button>
			</div>
		</div>
	);
};

export default SearchButton;
