
//Type que describe que va a pasar en el reducer de la actividad
export type ActivityAction = 
   {type : "save-activity", payload: { newActivity : Activity } } 
//Type para describit el estado inical 
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

    if(action.type === "save-activity"){
        //Este codigo maneja la logica para actualizar el state
        console.log("Desde el type de save-activity")
    }
}

