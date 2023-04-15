import { Observable, map, switchMap } from 'rxjs';
import { Injectable } from '@angular/core';
import { TodoModel } from '../models/todo.model';
import { StatusEnum } from '../types/enums';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class TodoService {
	constructor(private httpClient: HttpClient) {}

	getAllTodos(): Observable<TodoModel[]> {
		return this.httpClient.get<TodoModel[]>('http://localhost:3000/todos');
	}

	getTodoById(todoId: string): Observable<TodoModel> {
		return this.httpClient.get<TodoModel>(
			`http://localhost:3000/todos/${todoId}`,
		);
	}

	postNewTodo(todoName: string): Observable<TodoModel> {
		return this.getAllTodos().pipe(
			map(sortedTodos => sortedTodos[sortedTodos.length - 1]),
			map(lastTodo => ({
				id: lastTodo ? String(Number(lastTodo.id) + 1) : '1',
				name: todoName,
				status: StatusEnum.INCOMPLETE,
			})),
			switchMap(newTodo =>
				this.httpClient.post<TodoModel>('http://localhost:3000/todos', newTodo),
			),
		);
	}

	updateStatusTodo(todoId: string): Observable<TodoModel> {
		return this.getTodoById(todoId).pipe(
			map(todo => ({
				...todo,
				status:
					todo.status === StatusEnum.INCOMPLETE
						? StatusEnum.COMPLETE
						: StatusEnum.INCOMPLETE,
			})),
			switchMap(updatedToto =>
				this.httpClient.put<TodoModel>(
					`http://localhost:3000/todos/${todoId}`,
					updatedToto,
				),
			),
		);
	}

	deleteTodoById(id: string): Observable<boolean> {
		return this.httpClient.delete<boolean>(`http://localhost:3000/todos/${id}`);
	}
}
