
export type Category = {
    id: number,
    name: string
}


//Activiy debe estar relacionado con reducer, pero no se ve 
export type Activity = { 
    id: string, //Podria ser un UUID, para un identificador unico
    category: number,
    name: string,
    calories: number,
}