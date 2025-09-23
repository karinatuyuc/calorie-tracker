import type { Activity } from "../types"

export type ActivityAction = 
//definimos la accion de guardar una nueva actividad
{ type: 'save-activity', payload: { newAcrivity: Activity} } |
{ type: 'set-activeId', payload: { id: Activity['id'] } } |
{ type: 'delete-activity', payload: { id: Activity['id'] } } |
{ type: 'restart-app' } //No toma un payload




export type ActivityState = {
    activities: Activity[],
    activeId: Activity['id'],
}

const localStorageActivities = () : Activity[] => {
    const activitiesFromLocalStorage = localStorage.getItem('activities')
    return activitiesFromLocalStorage ? JSON.parse(activitiesFromLocalStorage) : []
};

export const initialState : ActivityState = {
//En lugar de este arreglo vacio
    activities: localStorageActivities(), //Esto ya no [],
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
            activities : updatedActivities,
            activeId: ''
        }
    }

    //Para editar una actividad
    if(action.type === 'set-activeId' ){
        return {
            ...state,
            activeId : action.payload.id
        }
    }


    if(action.type === 'delete-activity'){
        return {
            ...state,
            activities: state.activities.filter( activity => activity.id !== action.payload.id )

        }
    }

    if(action.type === 'restart-app'){
        return {
            //No va ..state, porque se reinicia todo
            activities: [],
            activeId: ''        
        }
    }

    return state //Es obligatorio devolver el state
}