import type { Activity } from "../types"

export type ActivityAction = 
//definimos la accion de guardar una nueva actividad
{ type: 'save-activity', payload: { newAcrivity: Activity} } |
{ type: 'set-activeId', payload: { id: Activity['id'] } }




export type ActivityState = {
    activities: Activity[],
    activeId: Activity['id'],
}



export const initialState : ActivityState = {
    activities: [],
    activeId: "",
}

//Este reducer conecta a ActivityAction con ActivityState

export const activityReducer = (
    state : ActivityState = initialState,
    action: ActivityAction
    ) => {
            if(action.type === 'save-activity'){
                //Este codigo maneja la logica para actulizar el estado

                let updadtedActivities : Activity[] = [];

                if(state.activeId){
                    updadtedActivities = state.activities.map( activity => activity.id === state.activeId ? action.payload.
                        newAcrivity : activity)
                }else{
                    updadtedActivities = [...state.activities, action.payload.newAcrivity]
                }
                
                return { //Retornara el estado actualizado
                    ...state,
                    activities: [
                        ...state.activities, 
                        action.payload.newAcrivity //Agregamos la nueva actividad al array de actividades
                    ]
                }
            }

            if(action.type === 'set-activeId'){
                return {
                    ...state,
                    activeId: action.payload.id //Actualizamos el activeId con el id proporcionado
                }
            }

             

    return state;
    //Esta linea es fundamental si se cumple o no, siempre se retorna el estado actual
}
 