
export type Category = {
    id: number,
    name: string
}


//Activiy debe estar relacionado con reducer, pero no se ve 
export type Activity = { 
    category: number,
    name: string,
    calories: number,
}