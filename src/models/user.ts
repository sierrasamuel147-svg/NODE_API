export interface User{
    id: number;
    name: string;
    email: string;
    age: number;
}

// Base de datos

export const users: User[]=[
    {id:1 ,name: 'Juan García', email: 'juan@sena.edu.co', age: 28},
    {id:2 ,name: 'María López', email: 'maria@sena.edu.co', age: 29},
    {id:3 ,name: 'Samuel Sierra', email: 'samuel@sena.edu.co', age: 19},
    
]