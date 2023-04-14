import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
	faCircleCheck,
	faCircleXmark,
	faTrashRestoreAlt,
} from '@fortawesome/free-solid-svg-icons';
import { TodoModel } from 'src/app/core/models/todo.model';
import { TodoService } from 'src/app/core/services/todo.service';
import { DarkModeEnum, StatusEnum } from 'src/app/core/types/enums';

@Component({
	selector: 'todo',
	templateUrl: './todo.component.html',
	styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
	@Input() todo!: TodoModel;
	@Input() darkMode!: DarkModeEnum;
	@Input() iconDelete!: IconDefinition;
	icon!: IconDefinition;
	color!: string;

	constructor(private todoService: TodoService) {}

	ngOnInit(): void {
		this.icon =
			this.todo.status === StatusEnum.COMPLETE ? faCircleCheck : faCircleXmark;

		this.iconDelete = faTrashRestoreAlt;
	}

	onDelete(): void {
		this.todoService.deleteTodoById(this.todo.id).subscribe();
	}

	getColorIcon(): string {
		return this.todo.status === StatusEnum.COMPLETE ? '#5dce5d' : '#f27575';
	}
}
