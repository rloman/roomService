import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IRoom } from 'app/shared/model/room.model';
import { RoomService } from './room.service';

@Component({
    selector: 'jhi-room-update',
    templateUrl: './room-update.component.html'
})
export class RoomUpdateComponent implements OnInit {
    room: IRoom;
    isSaving: boolean;

    constructor(private roomService: RoomService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ room }) => {
            this.room = room;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.room.id !== undefined) {
            this.subscribeToSaveResponse(this.roomService.update(this.room));
        } else {
            this.subscribeToSaveResponse(this.roomService.create(this.room));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IRoom>>) {
        result.subscribe((res: HttpResponse<IRoom>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
}
