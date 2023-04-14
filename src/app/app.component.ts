import { TodoModel } from './core/models/todo.model';
import { Component, OnInit } from '@angular/core';
import { DarkModeEnum } from './core/types/enums';
import { TodoService } from './core/services/todo.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title!: string;
	darkMode!: DarkModeEnum;
	todosList!: TodoModel[];

	constructor(private todoService: TodoService) {}

	ngOnInit(): void {
		this.title = 'Todo app';
		this.darkMode = DarkModeEnum.LIGHT;
		this.todosList = this.todoService.getAllTodos();
	}

	OnSwitchDarkMode(): void {
		if (this.darkMode === DarkModeEnum.LIGHT) {
			this.darkMode = DarkModeEnum.DARK;
		} else {
			this.darkMode = DarkModeEnum.LIGHT;
		}
	}
}
