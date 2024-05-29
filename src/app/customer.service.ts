

import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customers: Customer[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', address: '123 Main St', city: 'Anytown', state: 'CA', orderTotalPrice: 100 },
    
  ];

  constructor() {}

  getCustomers(): Observable<Customer[]> {
    return of(this.customers);
  }

  addCustomer(customer: Customer): void {
    this.customers.push(customer);
  }

  updateCustomer(customer: Customer): void {
    const index = this.customers.findIndex(c => c.id === customer.id);
    if (index !== -1) {
      this.customers[index] = customer;
    }
  }

  deleteCustomer(id: number): void {
    this.customers = this.customers.filter(c => c.id !== id);
  }
}
