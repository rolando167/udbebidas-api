import axios from "axios";
import { createContext, useEffect, useState } from "react";

//Crear el Context
export const CategoriasContext = createContext();

//crea el provider, es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {

	//crear categorias
	const [categorias, setCategorias] = useState([]);

	useEffect(() => {
		obtenerCategorias();
	}, []);

	const obtenerCategorias = async () => {
		const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
		const categorias = await axios.get(url);
		setCategorias(categorias.data.drinks);
	}

	return (
		<CategoriasContext.Provider
			value={{
				categorias
			}}
		>
			{props.children}
		</CategoriasContext.Provider>
	)

}

export default CategoriasProvider;
