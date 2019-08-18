import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { TodosService } from 'src/app/service/todos.service';
import { GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_ERROR } from '../action/todo.action';
import { Observable } from 'rxjs';

@Injectable()
export class TodosEffect {
  constructor(
      private _actions$: Actions,
      private _todoService: TodosService
  ) {}

  @Effect() getTodos$ = this._actions$
    .ofType(GET_TODOS)
    .switchMap(action => 
        this._todoService.getTodos()
          .map(todo => ({type: GET_TODOS_SUCCESS, payload: todo}))
          .catch(() => Observable.of({type: GET_TODOS_ERROR})));
}
