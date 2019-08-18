import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class TodosService {
  getTodos() {
    const todos = [
      {
        id: 1,
        title: "Learn ngrx/store",
        completed: false
      },
      {
        id: 2,
        title: "Learn ngrx/effect",
        completed: false
      }
    ];

    return Observable.create(todos);
  }
}
