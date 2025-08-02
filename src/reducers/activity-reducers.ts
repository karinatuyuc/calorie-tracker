import type { Activity } from "../types"


//Type que describe que va a pasar en el reducer de la actividad
export type ActivityAction = 
   {type : "save-activity", payload: { newActivity: Activity}} 


//a comment to describe the purpose of this file

//Type para describir el estado inical 
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

 //a condition to check the action type
    if(action.type === 'save-activity'){
        //Este codigo maneja la logia para actualizar el estado de las actividades
        console.log('saving in activity reducer')
    }

}

