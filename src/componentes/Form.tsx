import { categories } from "../data/categories"


export default function Form(){

    //Sin librerias
    return(
        <form 
         className="space-y-5 bg-white shadow p-10 rounded-lg"
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoria:</label>
                <select
                  className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                  id="category"
                >
                    {/*Iterando en la base de datos*/}
                    {categories.map(category => (
                         <option
                          key={category.id}
                          value={category.id}
                          
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            {/*Campo para ingresar la actividad */}
            <div className="grid grid-cols-1 gap-3 ">
                <label htmlFor="activity" className="font-bold">Actividad:</label>
                {/*el id="activity" sirve para activar el input de cada label*/}
                <input 
                 id="activity" 
                 type="text"
                 className="border border-slate-300 p-2 rounded-lg"
                 placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
                />
            </div>

            {/*Campo para ingresar las calorias */}
            <div className="grid grid-cols-1 gap-3">
                <label className="font-bold" htmlFor="calories">Calorias:</label>
                <input
                id='calories'
                type="number"
                className="border border-slate-300 rounded-lg p-2"
                placeholder="Calorias, ej. 300 o 500"
                />
            </div>

            <input
             type="submit"
             className="bg-gray-800 hover:bg-gray-900 w-full p-2 uppercase text-white 
             cursor-pointer"
             value="Guardar comida o guardar ejercicio"
            />

        </form>
    )
}

