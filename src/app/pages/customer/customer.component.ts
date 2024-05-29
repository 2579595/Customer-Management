

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Customer {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  total: string;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  [x: string]: any;
  pageSize: number = 6; 
  currentPage: number = 1; 

  customers: Customer[] = [
 
    { firstName: 'brian', lastName: 'paul', address:" Banglore"  , city: 'Banglore', state: ' Banglore', total: "$5000" },
    { firstName: 'Yaddi', lastName: 'Sandhya', address: "Guntury", city: 'Guntur', state: 'Andra Pradesh', total: "$800" },
    { firstName: 'Burra', lastName: 'Akanksha', address: "Warangal", city: 'Warangal', state: 'Telangana', total: "$2000" },
    { firstName: 'Rakesh', lastName: 'subudhi', address: "Odisa", city: 'Odisa', state: 'Odisa ', total: "$14500" },
 
 
  ];

  model: Customer = { firstName: '', lastName: '', address: '', city: '', state: '', total: '' };
  editingIndex: number | null = null;
  searchTerm: string = '';
  isAddingOrEditing = false;

  addBusSuccess: boolean = false;
  editBusSuccess: boolean = false;
  deleteBusSuccess: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.addBusSuccess = false;
    this.editBusSuccess = false;
    this.deleteBusSuccess = false;
  }

  onSubmit() {
    if (this.editingIndex !== null) {

      this.customers[this.editingIndex] = { ...this.model };
      this.editBusSuccess = true;
    } else {
      
      this.customers.push({ ...this.model });
      this.addBusSuccess = true;
    }

    this.resetForm();
    this.hideAlertsAfterDelay();
   
  }

  onAddEditToggle() {
    this.isAddingOrEditing = !this.isAddingOrEditing;
    this.resetForm();
    this.hideAlertsAfterDelay();
  }

  editCustomer(index: number) {
    this.isAddingOrEditing = true;
    this.editingIndex = index;
    this.model = { ...this.customers[index] };
  }

  deleteCustomer(index: number) {
    this.customers.splice(index, 1);
    this.deleteBusSuccess = true;

    if (this.editingIndex === index) {
      this.editingIndex = null;
      this.resetForm();
    }

    this.hideAlertsAfterDelay();
    
  }

  get filteredCustomer(): Customer[] {
    return this.customers.filter(customer =>
      customer.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      customer.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      customer.city.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      customer.state.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get paginatedCustomers(): Customer[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.filteredCustomer.slice(startIndex, startIndex + this.pageSize);
  }

  private resetForm() {
    this.model = { firstName: '', lastName: '', address: '', city: '', state: '', total: '' };
    this.editingIndex = null;
  }

  private hideAlertsAfterDelay() {
    
    setTimeout(() => {
      this.addBusSuccess = false;
      this.editBusSuccess = false;
      this.deleteBusSuccess = false;
    }, 3000);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    const lastPage = Math.ceil(this.filteredCustomer.length / this.pageSize);
    if (this.currentPage < lastPage) {
      this.currentPage++;
    }
  }

  viewOrders() {
    this.router.navigate(['/orders']);
  }
}


