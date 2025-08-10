import type { Activity } from "../types"
import { ActivityAction } from "../actions/activity-actions";

//Type que describe que va a pasar en el reducer de la actividad
export type ActivityAction = 
{ type: 'save-activity', payload: { newAcrivity: Activity} }


//Type para describir el estado inical 
type ActivityState = {
    activities: Activity[];
}


// Estado inicial del reducer de la actividad
export const initialState : ActivityState = {
    activities: []
}

//Este reducer conecta a ActivityAction con ActivityState

export const activityReducer = (
    state : ActivityState = initialState,
    action: ActivityAction
    ) => {

        if(action.type === 'save-activity'){
            //Este codigo maneja la logica para actualizar el state}

            console.log("Se ha guardado una nueva actividad", action.payload.newAcrivity);
            //testeando 

            //Retorna un nuevo estado con la nueva actividad añadida
            return {
                ...state,//Copiamos el estado que teniamos para que no se pierdan los datos
                activities: [...state.activities, action.payload.newAcrivity ] //Agregamos la nueva actividad al array de actividades


            }


    }

    return state;
    //Esta linea es fundamental si se cumple o no, siempre se retorna el estado actual
}
