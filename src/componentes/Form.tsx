import { useState } from "react"
import type { ChangeEvent } from "react"
import { categories } from "../data/categories"


export default function Form(){

    //Definiendo el state para las categorias, activiades y calorias en un ojeto

    const [activity, setActivity] = useState({
        category: 1,
        name: "",
        calories: 0
    })


    //Funcion para que cambie los values de input/select, o para el onChange   
    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        setActivity({
            ...activity,
           [e.target.id]: e.target.value
        })
    }



    //Sin librerias
    return(
        <form 
         className="space-y-5 bg-white shadow p-10 rounded-lg"
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoría:</label>
                 <select
                  className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                  id="category"
                  value={activity.category} //Este value es para conectar el state al form
                  onChange={handleChange}
                 >
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



            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">Actividad</label>
                <input 
                 id="name"
                 type="text"
                 className="border border-slate-300 p-2 rounded-lg"
                 placeholder="Ej. Comida, jugo de naranja, ensalada, Ejercicio, pesas, bicileta"
                 value={activity.name}
                 onChange={handleChange}
                />

            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calorias:</label>
                <input 
                 id="calories"
                 type="number"
                 className="border border-slate-300 p-2 rounded-lg"
                 placeholder="Carlorias. Ej, 300 o 500"
                 value={activity.calories}
                 onChange={handleChange}
                />
            </div>

            <input
             type="submit"
             value="Guardar comida o guardad ejercicio"
             className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold text-white uppercase
             cursor-pointer rounded-lg"
            />

        </form>
    )
}

