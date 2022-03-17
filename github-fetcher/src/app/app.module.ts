import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReposModule } from './components/repositories/repos.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { repoReducer } from './components/reducers/repos.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ReposEffects } from './components/effects/repo.effect';


@NgModule({
  declarations: [AppComponent, ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    ReposModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([ReposEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
