import { StatusEnum } from '../types/enums';

export class TodoModel {
	id!: string;

	name!: string;

	status!: StatusEnum;

	constructor(id: string, name: string, status: StatusEnum) {
		this.id = id;
		this.name = name;
		this.status = status;
	}
}
