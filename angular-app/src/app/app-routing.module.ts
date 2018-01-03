import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HangarComponent } from './hangar/hangar.component';
import { BlackHoleComponent } from './black-hole/black-hole.component';
import { EngineersRoomComponent } from './engineers-room/engineers-room.component';
import { EngineersTrashComponent } from './engineers-trash/engineers-trash.component';
import { EngineersTrashGuardService } from './services/engineers-trash-guard.service';
import { PilotFormComponent } from './pilot-form/pilot-form.component';

const routes: Routes = [
  {
    path: 'hangar',
    component: HangarComponent,
    children: [
      {path: 'trash', component: EngineersTrashComponent, canActivate: [EngineersTrashGuardService]},
      {path: '', component: EngineersRoomComponent}
    ]
  },
  {path: 'pilots/new', component: PilotFormComponent},
  {path: 'pilots/:id/edit', component: PilotFormComponent},
  {path: '', redirectTo: 'hangar', pathMatch: 'full'},
  {path: '**', component: BlackHoleComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}