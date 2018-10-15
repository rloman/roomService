import { Moment } from 'moment';
import { IRoom } from 'app/shared/model//room.model';

export interface ITask {
    id?: number;
    title?: string;
    description?: string;
    dueDate?: Moment;
    room?: IRoom;
}

export class Task implements ITask {
    constructor(public id?: number, public title?: string, public description?: string, public dueDate?: Moment, public room?: IRoom) {}
}
