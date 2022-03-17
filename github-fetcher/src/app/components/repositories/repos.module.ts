import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReposListComponent } from './profile/repos-list.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { repoReducer } from '../reducers/repos.reducer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [ReposListComponent,],
  imports: [
    FontAwesomeModule,
    FormsModule,
    CommonModule,
    StoreModule.forFeature('repositories', repoReducer),
  ],
  providers: [],
  exports: [ReposListComponent],
})

export class ReposModule {}
