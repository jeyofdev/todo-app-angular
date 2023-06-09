import { Component, Input } from '@angular/core';

@Component({
	selector: 'typography',
	templateUrl: './typography.component.html',
	styleUrls: ['./typography.component.scss'],
})
export class TypographyComponent {
	@Input() value!: string;
	@Input() type!: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
	@Input() color!: string;
}
