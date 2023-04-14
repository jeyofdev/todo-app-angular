import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from 'src/app/core/services/todo.service';
import { DarkModeEnum } from 'src/app/core/types/enums';

@Component({
	selector: 'todo-form',
	templateUrl: './todo-form.component.html',
	styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
	@Input() class!: string;
	@Input() placeholder!: string;
	@Input() darkMode!: DarkModeEnum;
	todoToAdd!: string;

	constructor(private todoService: TodoService) {}

	ngOnInit(): void {
		this.todoToAdd = '';
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	onSubmit(form: NgForm): void {
		this.todoService.postNewTodo(this.todoToAdd).subscribe();
	}
}
