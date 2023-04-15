import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faList, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Observable, map } from 'rxjs';
import { TodoModel } from 'src/app/core/models/todo.model';
import { TodoService } from 'src/app/core/services/todo.service';
import { DarkModeEnum } from 'src/app/core/types/enums';

@Component({
	selector: 'todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
	@Input() darkMode!: DarkModeEnum;

	iconAll!: IconDefinition;
	iconNotCompleted!: IconDefinition;
	iconCompleted!: IconDefinition;
	todosList$!: Observable<TodoModel[]>;
	todosListFiltered$!: Observable<TodoModel[]>;

	constructor(private todoService: TodoService) {}

	ngOnInit(): void {
		this.iconAll = faList;
		this.iconNotCompleted = faXmark;
		this.iconCompleted = faCheck;
		this.todosList$ = this.todoService.getAllTodos();
		this.todosListFiltered$ = this.todosList$;
	}

	onFilteredList(status: string | null): void {
		if (status) {
			// eslint-disable-next-line no-console
			this.todosListFiltered$ = this.todosList$.pipe(
				map(todos => todos.filter(t => t.status === status)),
			);
		} else {
			this.todosListFiltered$ = this.todosList$;
		}
	}

	onPost(todoName: string): void {
		this.todoService.postNewTodo(todoName).subscribe(() => {
			this.todosList$ = this.todoService.getAllTodos();
			this.todosListFiltered$ = this.todosList$;
		});
	}

	onUpdateStatus(todoId: string): void {
		this.todoService.updateStatusTodo(todoId).subscribe(() => {
			this.todosList$ = this.todoService.getAllTodos();
			this.todosListFiltered$ = this.todosList$;
		});
	}

	onDelete(todoId: string): void {
		this.todoService.deleteTodoById(todoId).subscribe(() => {
			this.todosList$ = this.todoService.getAllTodos();
			this.todosListFiltered$ = this.todosList$;
		});
	}
}
