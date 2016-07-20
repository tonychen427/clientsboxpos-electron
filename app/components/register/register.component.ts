import { Component } from '@angular/core';
import {PaginationControlsCmp, PaginatePipe, PaginationService} from 'ng2-pagination';

@Component({
	templateUrl: 'app/components/register/register.component.html',
  	styleUrls: ['app/components/register/register.component.css'],
  	providers: [PaginationService],
  	directives: [PaginationControlsCmp],
  	pipes: [PaginatePipe]
})
export class RegisterComponent {
	posHeight = 0;
	collection = [];
	shoppingCart = [];
  
	constructor() {
		for (let i = 1; i <= 100; i++) {
		  this.collection.push(`item ${i}`);
		}
	}
	ngOnInit() {
		this.posHeight = window.innerHeight - 375;
	}
	onResize(event) {
  		this.posHeight = window.innerHeight - 375;
	}

	AddItemToCart(item){
		window.console.log(item);
		this.shoppingCart.push({
			'productTitle': 'hello',
			'price': 323.99,
			'qty':2,			
			})
	}
}