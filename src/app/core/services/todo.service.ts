import { Injectable } from '@angular/core';
import { TodoModel } from '../models/todo.model';
import { StatusEnum } from '../types/enums';

@Injectable({
	providedIn: 'root',
})
export class TodoService {
	getAllTodos(): TodoModel[] {
		const storage = localStorage.getItem('todos');
		return storage ? JSON.parse(storage) : [];
	}

	postNewTodo(todoName: string): void {
		const storage = localStorage.getItem('todos');
		const oldDatas = storage ? JSON.parse(storage) : [];
		const datas: TodoModel[] = oldDatas;

		datas.push({
			id: datas.length > 0 ? String(oldDatas.length + 1) : '1',
			name: todoName,
			status: StatusEnum.INCOMPLETE,
		});

		localStorage.setItem('todos', JSON.stringify(datas));
	}

	deleteTodoById(id: string): void {
		const todos = this.getAllTodos();
		const newTodos = todos.filter(t => t.id !== id);

		localStorage.setItem('todos', JSON.stringify(newTodos));
	}
}
