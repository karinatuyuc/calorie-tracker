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
    action : ActivityAction
) => {

    if(action.type === 'save-activity'){
        //Este codigo maneja la logica para actulizar el estado

        let updatedActivities : Activity [] =  []

        //Si el activeId es diferente de null, significa que se esta editando una actividad
        if(state.activeId){
            updatedActivities = state.activities.map( activity => activity.id === state.activeId ? action.payload.
                newAcrivity : activity
             )

        }else{
            updatedActivities = [...state.activities, action.payload.newAcrivity]

        }

        return { //Return por accion
            ...state,
            activities : updatedActivities
        }
    }


    if(action.type === 'set-activeId' ){
        return {
            ...state,
            activeId : action.payload.id
        }
    }

    return state
}
 