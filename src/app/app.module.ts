import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { Routes, RouterModule } from "@angular/router";
import { InputComponent } from './Components/input/input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule } from "@angular/material/input";
import {MatButtonModule } from "@angular/material/button";
import {MatToolbarModule } from "@angular/material/toolbar";
import { ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from './Components/header/header.component';
import { ListItemComponent } from './Components/list-item/list-item.component';
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
const  routers: Routes = [
  {path: ':status', component: TodoComponent},
  {path: '**', redirectTo: '/all'}
]

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    InputComponent,
    HeaderComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routers),
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatListModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
