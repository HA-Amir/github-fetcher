import { Action, createReducer, on } from '@ngrx/store';
import * as ReposActions from "../actions/repos.action"; 
import { Repos } from '../models/gihubUser';

export interface State {
    repos: any
}

export const initialState: State = {
    repos: []
}

const ReposReducer = createReducer(
    initialState,
    on(ReposActions.FetchUserRepos, ((state) => ({...state, loading: true}))),
    on(ReposActions.FetchUserReposSuccess, ((state, repos) => ({...state, ...repos, loading: false}))),
    on(ReposActions.FetchUserReposFailure, ((state) => ({...state, loading: true}))),
)

export function repoReducer(state : State | undefined, action: Action){
    return ReposReducer(state, action)
}




