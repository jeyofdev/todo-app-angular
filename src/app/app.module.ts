import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TypographyComponent } from './core/components/ui/typography/typography.component';
import { DarkModeButtonComponent } from './core/components/ui/dark-mode-button/dark-mode-button.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { AlertComponent } from './core/components/ui/alert/alert.component';

@NgModule({
	declarations: [
		AppComponent,
		TypographyComponent,
		DarkModeButtonComponent,
		TodoFormComponent,
		TodoComponent,
		TodoListComponent,
		AlertComponent,
	],
	imports: [BrowserModule, FontAwesomeModule, FormsModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
