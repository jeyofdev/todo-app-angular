import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
	faCircleCheck,
	faCircleXmark,
	faTrashRestoreAlt,
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
	@Input() iconDelete!: IconDefinition;
	@Output() delete = new EventEmitter<string>();
	@Output() update = new EventEmitter<string>();

	icon!: IconDefinition;
	color!: string;

	ngOnInit(): void {
		this.icon =
			this.todo.status === StatusEnum.COMPLETE ? faCircleCheck : faCircleXmark;

		this.iconDelete = faTrashRestoreAlt;
	}

	onUpdate(): void {
		this.update.emit(this.todo.id);
	}

	onDelete(): void {
		this.delete.emit(this.todo.id);
	}

	getColorIcon(): string {
		return this.todo.status === StatusEnum.COMPLETE ? '#5dce5d' : '#f27575';
	}
}
