import type { Activity } from "../types"
//importando el tipo Activity desde types.ts

//Type que describe que va a pasar en el reducer de la actividad
export type ActivityAction = 
   {type : "save-activity", payload: { newActivity: Activity}} 


//Type para describir el estado inical 
type ActivityState = {
    activities: Activity[];
}


// Estado inicial del reducer de la actividad
export const initialState : ActivityState = {
    activities: [];
}

//Este reducer conecta a ActivityAction con ActivityState

export const activityReducer = (
    state : ActivityState = initialState,
    action: ActivityAction
    ) => {

    if(action.type === 'save-activity'){
        //Este codigo maneja la logia para actualizar el estado de las actividades
        console.log('saving in activity reducer')
        console.log("Action in save-activity") //COnsole to see if is working or not
    }

}

