/* eslint-disable prettier/prettier */
import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
	faCircleCheck,
	faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { TodoModel } from 'src/app/core/models/todo.model';
import { DarkModeEnum, StatusEnum } from 'src/app/core/types/enums';

@Component({
	selector: 'todo',
	templateUrl: './todo.component.html',
	styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
	@Input() todo!: TodoModel;
	@Input() darkMode!: DarkModeEnum;
	icon!: IconDefinition;
	color!: string;

	ngOnInit(): void {
		this.icon =
			this.todo.status === StatusEnum.COMPLETE ? faCircleCheck : faCircleXmark;
	}

	getColorIcon(): string {
		return this.todo.status === StatusEnum.COMPLETE ? '#5dce5d' : '#f27575';
	}
}
