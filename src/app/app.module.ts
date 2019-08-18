import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todos/todo/todo.component';
import { TodosComponent } from './todos/todos.component';
import { todos } from './state/reducer/todos.reducer';
import { TodosEffect } from './state/effect/todos.effect';
import { EffectsModule } from '@ngrx/effects';

@NgModule({

  declarations: [
    AppComponent,
    TodoComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({todos}),
    EffectsModule.forRoot([TodosEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
