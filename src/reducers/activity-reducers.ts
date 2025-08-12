import type { Activity } from "../types"

export type ActivityAction = 
//definimos la accion de guardar una nueva actividad
{ type: 'save-activity', payload: { newAcrivity: Activity} }



type ActivityState = {
    activities: Activity[];
}



export const initialState : ActivityState = {
    activities: []
}

//Este reducer conecta a ActivityAction con ActivityState

export const activityReducer = (
    state : ActivityState = initialState,
    action: ActivityAction
    ) => {
            if(action.type === 'save-activity'){
                //Este codigo maneja la logica para actulizar el estado
                
                return { //Retornara el estado actualizado
                    ...state,
                    activities: [
                        ...state.activities, 
                        action.payload.newAcrivity //Agregamos la nueva actividad al array de actividades
                    ]
                }
            }

    return state;
    //Esta linea es fundamental si se cumple o no, siempre se retorna el estado actual
}
