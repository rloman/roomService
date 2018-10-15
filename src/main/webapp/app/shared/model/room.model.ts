import { ITask } from 'app/shared/model//task.model';

export interface IRoom {
    id?: number;
    name?: string;
    tasks?: ITask[];
}

export class Room implements IRoom {
    constructor(public id?: number, public name?: string, public tasks?: ITask[]) {}
}
