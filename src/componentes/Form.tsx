import { useState, useEffect } from "react"
import type { ChangeEvent, FormEvent, Dispatch } from "react"
import { v4 as uuidv4 } from 'uuid' //Importamos para que no de error el uuid

import { categories } from "../data/categories"
import type { Activity} from "../types" //El type Activity debe ser importado
import type { ActivityAction, ActivityState } from "../reducers/activity-reducers"


type FormProps = {
    dispatch: Dispatch<ActivityAction>
    state: ActivityState
}

const initialState : Activity = {
    id: uuidv4(), //Generamos un id unico para cada actividad
    category: 1,
    name: "",
    calories: 0
}


export default function Form({dispatch, state} : FormProps) {

    const [activity, setActivity] = useState<Activity>(initialState) //El state inicial debe ser del tipo Activity

    useEffect(() => {
        if(state.activeId){
            const selectedActivity = state.activities.filter( stateActivity => stateActivity.id === state.activeId)[0]
            setActivity(selectedActivity)

        }

    }, [state.activeId] )


    //Funcion para que cambie los values de input/select, o para el onChange   
    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
    //Comprobando donde estamos escribiendo 
    const isNumberField = ['category', 'calories'].includes(e.target.id)
        setActivity({
            ...activity,
           [e.target.id]: isNumberField ? +e.target.value : e.target.value //Si es un campo numerico, convertir a numero
        })
    }

    const isValidActivity = () => {
        const { name, calories } = activity
        return name.trim() !== '' && calories > 0
    }


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        dispatch({ type: "save-activity", payload: {newAcrivity: activity} })
        setActivity({
            ...initialState, //Reseteamos el formulario a su estado inicial
            id: uuidv4() //Generamos un nuevo id unico para la proxima actividad

        }) 

    }

    //Sin librerias
    return(
        <form 
         className="space-y-5 bg-white shadow p-10 rounded-lg"
         onSubmit={handleSubmit}
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
             value={activity.category === 1 ? "Guardar Comida" : "Guardar ejercicio "}
             className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold text-white uppercase
             cursor-pointer rounded-lg disabled:opacity-10"
             disabled={!isValidActivity()}
            />

        </form>
    )
}

