import { Component, OnInit } from '@angular/core';
// import { IconDefinition, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { DarkModeEnum } from './core/types/enums';
import { TodoService } from './todo.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title!: string;
	darkMode!: DarkModeEnum;

	constructor(private todoService: TodoService) {}

	ngOnInit(): void {
		this.title = 'Todo app';
		this.darkMode = DarkModeEnum.LIGHT;

		// eslint-disable-next-line no-console
		console.log(this.todoService.getAllTodos());
	}

	OnSwitchDarkMode(): void {
		if (this.darkMode === DarkModeEnum.LIGHT) {
			this.darkMode = DarkModeEnum.DARK;
		} else {
			this.darkMode = DarkModeEnum.LIGHT;
		}
	}
}
