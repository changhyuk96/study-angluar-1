import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css',
})
export class ProductAlertsComponent {

  // @Input -> Proudct 프로퍼티 받을 것을 선언
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();


}
