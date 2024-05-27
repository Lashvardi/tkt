import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  //არანაირი ტიპიზაცია ნებისმიერი რამ შეგვიძლია რომ ჩავაწოდოთ
  @Input() event: any;
}
