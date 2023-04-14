import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { DarkModeEnum } from '../../../types/enums';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'dark-mode-button',
	templateUrl: './dark-mode-button.component.html',
	styleUrls: ['./dark-mode-button.component.scss'],
})
export class DarkModeButtonComponent implements OnInit {
	darkModeIcon!: IconDefinition;
	@Input() darkMode!: DarkModeEnum;
	@Output() icon = new EventEmitter<IconDefinition>();

	ngOnInit(): void {
		this.darkModeIcon = faSun;
	}

	onClick(): void {
		this.icon.emit();
		this.darkModeIcon = this.darkMode === DarkModeEnum.LIGHT ? faMoon : faSun;
	}
}
