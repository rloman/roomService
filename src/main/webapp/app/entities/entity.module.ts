import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RoomServiceTaskModule } from './task/task.module';
import { RoomServiceRoomModule } from './room/room.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        RoomServiceTaskModule,
        RoomServiceRoomModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RoomServiceEntityModule {}
