import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [recetas, setRecetas] = useState([]);
    const [busqueda, setBusquedaRecetas] = useState({
        nombre:'',
        categoria:''
    });
    const {nombre, categoria} = busqueda;

    const [consultar, setConsultar] = useState(false);

    useEffect(() => {
        if(consultar){
            obtenerRecetas();
        }
    },[busqueda]);

    const obtenerRecetas = async () =>{
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
        const resultado = await axios.get(url);
		setRecetas(resultado.data.drinks);
    }

    return ( 
        <RecetasContext.Provider
            value={{
                recetas,
                setBusquedaRecetas,
                setConsultar
            }}
        >
            {props.children}
        </RecetasContext.Provider>
     );
}
 
export default RecetasProvider;