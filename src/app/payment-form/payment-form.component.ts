import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent {
  name: string;
  date: string;
  amount: number;

  onNameChange(e: Event) {
    this.name = (e.target as HTMLInputElement).value;
  }

  onDateChange(e: Event) {
    this.date = (e.target as HTMLInputElement).value;
  }

  onAmountChange(e: Event) {
    this.amount = parseFloat((e.target as HTMLInputElement).value);
  }
}
