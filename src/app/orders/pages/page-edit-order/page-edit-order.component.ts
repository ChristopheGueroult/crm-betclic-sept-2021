import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Order } from 'src/app/core/models/order';
import { tryUpdateOrderAction } from '../../store/actions/orders.actions';
import { selectOrderById } from '../../store/selectors/orders.selectors';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent implements OnInit {
  public item$ = this.store.select(selectOrderById);
  constructor(private store: Store) {}

  ngOnInit(): void {}

  public update(item: Order): void {
    this.store.dispatch(tryUpdateOrderAction({ order: item }));
  }
}
