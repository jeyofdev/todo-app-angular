import { TodoModel } from './core/models/todo.model';
import { Component, OnInit } from '@angular/core';
import { DarkModeEnum } from './core/types/enums';
import { TodoService } from './core/services/todo.service';
import { Observable, map } from 'rxjs';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faList, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title!: string;
	darkMode!: DarkModeEnum;
	todosList$!: Observable<TodoModel[]>;
	todosListFiltered$!: Observable<TodoModel[]>;
	iconAll!: IconDefinition;
	iconNotCompleted!: IconDefinition;
	iconCompleted!: IconDefinition;

	constructor(private todoService: TodoService) {}

	ngOnInit(): void {
		this.title = 'Todo app';
		this.darkMode = DarkModeEnum.LIGHT;
		this.todosList$ = this.todoService.getAllTodos();
		this.todosListFiltered$ = this.todosList$;
		this.todoService.getAllTodos();
		this.iconAll = faList;
		this.iconNotCompleted = faXmark;
		this.iconCompleted = faCheck;
	}

	OnSwitchDarkMode(): void {
		if (this.darkMode === DarkModeEnum.LIGHT) {
			this.darkMode = DarkModeEnum.DARK;
		} else {
			this.darkMode = DarkModeEnum.LIGHT;
		}
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
}
