import { Injectable } from '@angular/core';
import * as ReposActions from "../actions/repos.action"; 
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ReposService } from '../services/repos.service';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';


@Injectable()


export class ReposEffects {

  constructor(private actions: Actions, private repoService: ReposService) {}
  
  public fetchReposUser$ = createEffect(() =>
    this.actions.pipe(
      ofType(ReposActions.FetchUserRepos),
      mergeMap((action) =>
        this.repoService.getReposByUsername(action.username).pipe(
          map((result: any) => {
             return ReposActions.FetchUserReposSuccess({repos: result})
          }),
          catchError((err) => of(ReposActions.FetchUserReposFailure ))
        )
      )
    )
  );
}
