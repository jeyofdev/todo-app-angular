import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
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
	@Output() post = new EventEmitter<string>();
	todoToAdd!: string;

	ngOnInit(): void {
		this.todoToAdd = '';
	}

	onSubmit(form: NgForm): void {
		this.post.emit(this.todoToAdd);
		form.reset();
	}
}
