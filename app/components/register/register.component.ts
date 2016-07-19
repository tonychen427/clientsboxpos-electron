import { Component } from '@angular/core';

@Component({
	templateUrl: 'app/components/register/register.component.html',
  	styleUrls: ['app/components/register/register.component.css']
})
export class RegisterComponent {
	posHeight = 0;

	ngOnInit() {
		this.posHeight = window.innerHeight - 350;
	}
	onResize(event) {
  		this.posHeight = window.innerHeight - 350;
	}
}