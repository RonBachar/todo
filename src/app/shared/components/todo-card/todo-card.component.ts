import { Component, Input } from '@angular/core';
import { ITodo, ITodoStatus } from '../../../core/models/todo.model';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';




@Component({
    selector: 'app-todo-card',
    standalone: true,
    imports: [MatCardModule, MatButton],
    templateUrl: './todo-card.component.html',
    styleUrl: './todo-card.component.scss',
})
export class TodoCardComponent {
    @Input() type: ITodoStatus = 'OPEN';
    @Input() todo!: ITodo;
    

}
