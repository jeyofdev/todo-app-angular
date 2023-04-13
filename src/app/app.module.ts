import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TypographyComponent } from './core/components/ui/typography/typography.component';

@NgModule({
	declarations: [AppComponent, TypographyComponent],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
