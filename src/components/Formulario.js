
import { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext'
import { RecetasContext } from '../context/RecetasContext'

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria:''
    });

    const { categorias } = useContext(CategoriasContext);
    const { setBusquedaRecetas, setConsultar } = useContext(RecetasContext);

    const { nombre, categoria} = busqueda;

    const handleChange = (e) =>{
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
        setConsultar(true);
    }

    return (
        <form
            className="col-12"
            onSubmit={e =>{
                e.preventDefault();
                setBusquedaRecetas(busqueda)
            }}
        >
            <fieldset className="text-center">
                <legend>Busca bedidas por Categoría o Ingredientes</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="Buscar por Ingrediente"
                        onChange={handleChange}
                        value={nombre}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        name="categoria"
                        className="form-control"
                        onChange={handleChange}
                        value={categoria}
                    >
                        <option value="">-- Selecciona Categoria --</option>
                        {
                            categorias.map(categoria => (
                                <option
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                                >{categoria.strCategory}</option>
                            ))  
                        }
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                    type="submit"
                    className="btn btn-block btn-primary"
                     value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
     );
}

export default Formulario;