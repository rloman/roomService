import { NgModule } from '@angular/core';

import { RoomServiceSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [RoomServiceSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [RoomServiceSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class RoomServiceSharedCommonModule {}
