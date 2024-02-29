import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { TodoCardComponent } from '../../shared/components/todo-card/todo-card.component';
import { TodoService } from '../../core/services/todo.service';
import { ITodo } from '../../core/models/todo.model';
import { CommonModule } from '@angular/common';
import { SlidePanelComponent } from '../../shared/ui/slide-panel/slide-panel.component';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
    selector: 'app-todo',
    standalone: true,
    imports: [
        CommonModule,
        TodoCardComponent,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule,
        SlidePanelComponent,
        MatInputModule,
        MatFormFieldModule
    ],
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.scss',
})

export class TodoComponent implements OnInit {

    todos: ITodo[] = [];
    isSlidePanelOpen: boolean = false;

    constructor(private todoService: TodoService) {

    }

    ngOnInit(): void {
        this.getAllTodos();
    }

    getAllTodos() {
        this.todos = this.todoService.getAllTodo();
    }

    onCloseSlidePanel() {
        this.isSlidePanelOpen = false;
    }
    openSlidePanel(){
        this.isSlidePanelOpen = true;

    }
}
