import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TypographyComponent } from './core/components/ui/typography/typography.component';
import { DarkModeButtonComponent } from './core/components/ui/dark-mode-button/dark-mode-button.component';
import { TodoFormComponent } from './core/components/ui/form/todo-form.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo/todo.component';

@NgModule({
	declarations: [
		AppComponent,
		TypographyComponent,
		DarkModeButtonComponent,
		TodoFormComponent,
		TodoComponent,
	],
	imports: [BrowserModule, FontAwesomeModule, FormsModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
