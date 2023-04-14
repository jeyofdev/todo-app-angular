import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TypographyComponent } from './core/components/ui/typography/typography.component';
import { DarkModeButtonComponent } from './core/components/ui/dark-mode-button/dark-mode-button.component';
import { TodoFormComponent } from './core/components/ui/form/todo-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	// eslint-disable-next-line prettier/prettier
	declarations: [
		AppComponent,
		TypographyComponent,
		DarkModeButtonComponent,
		TodoFormComponent,
	],
	imports: [BrowserModule, FontAwesomeModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
