import { Component, OnInit } from '@angular/core';
import { IconDefinition, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { DarkModeEnum } from './core/types/enums';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title!: string;
	darkModeIcon!: IconDefinition;
	darkMode!: DarkModeEnum;

	ngOnInit(): void {
		this.title = 'Todo app';
		this.darkModeIcon = faSun;
		this.darkMode = DarkModeEnum.LIGHT;
	}

	OnSwitchDarkMode(): void {
		if (this.darkMode === DarkModeEnum.LIGHT) {
			this.darkMode = DarkModeEnum.DARK;
			this.darkModeIcon = faMoon;
		} else {
			this.darkMode = DarkModeEnum.LIGHT;
			this.darkModeIcon = faSun;
		}
	}
}
