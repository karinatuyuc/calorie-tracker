import { useReducer } from "react";
import Form from "./componentes/Form";
import ActivityList from "./componentes/ActivityList";
import { activityReducer, initialState } from "./reducers/activity-reducers";

function App(){

  const [state, dispatch] = useReducer(activityReducer, initialState);

  return(
    <>
    {/*Header y boton */}
    <header className="bg-lime-600 py-3">
      <div className="max-w-4xl mx-auto flex justify-between">
        <h1 className="text-center text-lg font-bold text-white uppercase">
          Contador de Calorias
        </h1>
      </div>
    </header>

    {/*Seccion del formulario*/}
    <section className="bg-lime-500 py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <Form 
          dispatch={dispatch}
        
        />
      </div>
    </section>

    <section className="p-10 mx-auto max-w-4xl">
      <ActivityList 
       activities={state.activities}
       dispatch={dispatch}
      />
    </section>

    </>
  )
}

export default App 