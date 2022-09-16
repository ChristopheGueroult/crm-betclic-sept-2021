import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import {
  changeStateAction,
  tryDeleteOrderAction,
  tryGetAllOrdersAction,
} from '../../store/actions/orders.actions';
import { selectAllOrders } from '../../store/selectors/orders.selectors';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public collection$: Observable<Order[]> = this.store.select(selectAllOrders);
  public states = Object.values(StateOrder);
  public titre = 'List Orders';

  public entetes = [
    'Action',
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];
  constructor(private store: Store, private router: Router) {}
  ngOnInit(): void {
    this.store.dispatch(tryGetAllOrdersAction());
  }
  check() {
    console.log('CD PAGE LIST ORDER');
  }

  public changeTitle(): void {
    this.titre = 'New List Orders';
  }

  public changeState(item: Order, event: any): void {
    const state = event.target.value;
    this.store.dispatch(changeStateAction({ order: item, state }));
  }

  public goToEdit(id: number): void {
    this.router.navigate(['list-orders', 'edit-order', id]);
  }
  public deleteItem(id: number): void {
    this.store.dispatch(tryDeleteOrderAction({ id }));
  }
}
