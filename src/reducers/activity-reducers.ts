import type { Activity } from "../types"

export type ActivityAction = 
//definimos la accion de guardar una nueva actividad
{ type: 'save-activity', payload: { newAcrivity: Activity} } |
{ type: 'set-activeId', payload: { id: Activity['id'] } }




export type ActivityState = {
    //17/08
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
                
                let updatedActivities : Activity[] = []
                if(state.activeId){
                    updatedActivities = state.activities.map( activity => activity.id === state.activeId ? action.payload.
                        newAcrivity : activity)
                }else{
                    updatedActivities =  [...state.activities, action.payload.newAcrivity] //Agregamos la nueva actividad al array de actividades]
                }
//Antes del return se puede escribir toda la logica
                return { //Retornara el estado actualizado
                    ...state,
                    activities: updatedActivities,
                    activeId: ""
                }
            }

            if(action.type === 'set-activeId'){
                //set-activieId para saber el id
                return {
                    ...state,
                    activeId: action.payload.id //Actualizamos el activeId con el id proporcionado
                }
            }

             

    return state;
    //Esta linea es fundamental si se cumple o no, siempre se retorna el estado actual
}
 