import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '../models/todo.model';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    todos: ITodo[] = [
        {
            id: 1,
            title: 'Clean home',
            description: 'Get ',
            status: 'OPEN',
            owner: {
                name: 'Liron',
            },
        },
        {
            id: 2,
            title: 'test title',
            description: 'Test Des',
            status: 'PROGGRESS',
            owner: {
                name: 'Matan',
            },
        },
    ];

    constructor() {}

    getAllTodo() {
        return this.todos;
    }
}
