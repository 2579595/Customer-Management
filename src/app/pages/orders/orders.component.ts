
import { Component, OnInit } from '@angular/core';

interface Order {
  name: string;
  products: string[];
  total: string;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [
    { 
      name: 'Brian Paul', 
      products: ['Laptop', 'Phone', 'Headphones'], 
      total: "$5000" 
    },
    { 
      name: 'Yaddi Sandhya', 
      products: ['Tablet', 'Smartwatch'], 
      total: "$800" 
    },
    { 
      name: 'Burra Akanksha', 
      products: [ 'Shoes','t_shirt'], 
      total: "$2000" 
    },
    { 
      name: 'Rakesh Subudhi', 
      products: ['Tv','Jeans'], 
      total: "$14500" 
    },
   
  ];

  ngOnInit(): void {
  }
}
