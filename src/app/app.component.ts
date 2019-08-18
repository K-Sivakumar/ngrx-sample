import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getTodos } from './state/action/todo.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Observable<any>;

  constructor(private _store: Store<any>) {
    this._store.dispath(getTodos());
    this.todos = _store.select("todos");
  }
}
