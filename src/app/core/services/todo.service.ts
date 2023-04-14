import { Injectable } from '@angular/core';
import { TodoModel } from '../models/todo.model';
import { StatusEnum } from '../types/enums';

@Injectable({
	providedIn: 'root',
})
export class TodoService {
	todosList: TodoModel[] = [
		{
			id: '1',
			name: 'react',
			status: StatusEnum.COMPLETE,
		},
		{
			id: '2',
			name: 'angular',
			status: StatusEnum.INCOMPLETE,
		},
	];

	getAllTodos(): TodoModel[] {
		return this.todosList;
	}
}
