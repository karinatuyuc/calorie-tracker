import type { Activity } from "../types"

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

            //Retorna un nuevo estado con la nueva actividad añadida
            return {
                ...state,
                activities: [...state.activities, action.payload.newAcrivity]

            }


    }
    return state; //Retornamos el state sin cambios si no se cumple la condicion 
}
