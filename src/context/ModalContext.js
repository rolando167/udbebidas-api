import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ModalContext = createContext();


const ModalProvider = (props) => {

    const [ idReceta, setIdReceta] = useState(null);
    const [ recetaInfo, setReceta] = useState({});

    useEffect(() => {
        obtenerReceta();
    }, [idReceta]);

    const obtenerReceta = async () =>{
        if(!idReceta) return;

        const url =`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
        const resultado = await axios.get(url);
        setReceta(resultado.data.drinks[0]);
    }

    return (
        <ModalContext.Provider
            value={{
                recetaInfo,
                setIdReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}

export default ModalProvider;