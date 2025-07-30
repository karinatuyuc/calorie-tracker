
//Type que describe que va a pasar en el reducer de la actividad
export type ActivityAction = {

}

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

}

