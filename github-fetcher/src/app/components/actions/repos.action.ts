
import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export enum userAction {
  GET_REPOSITORY = '[GET REPOSITORY]',
  GET_REPOSITORY_SUCCESS = '[GET_REPOSITORY] SUCCESS',
  GET_REPOSITORY_FAILURE = '[GET_REPOSITORY] FAILURE',
}

export const FetchUserRepos = createAction(
  userAction.GET_REPOSITORY,
  props<{ username: string }>()
);

export const FetchUserReposSuccess = createAction(
    userAction.GET_REPOSITORY_SUCCESS,
  props<{ repos: any}>()
);

export const FetchUserReposFailure = createAction(
    userAction.GET_REPOSITORY_FAILURE,
  props<{ error: HttpErrorResponse }>()
);

