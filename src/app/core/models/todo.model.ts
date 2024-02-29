

export type ITodoStatus = 'OPEN' | 'PROGGRESS' | 'HELP' | 'DONE';
export type IPriority = 'LOW' | 'HIGH' | 'MEDIUM';


export interface ITodo{
    id?: number;
    title: string;
    description: string;
    status: ITodoStatus;
    owner: IEmployee;
    created_at?: string;
    updated_at?: string;
    dueDate?: string; 
}


export interface IEmployee {
    id?: number;
    name: string;
}
