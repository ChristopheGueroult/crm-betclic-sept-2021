import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { ColOrdersService } from 'src/app/core/services/col-orders.service';
import { selectRouteParam } from 'src/app/store/reducers/router.reducer';
import {
  addOrderSuccessAction,
  changeStateAction,
  deleteOrderSuccessAction,
  errorOrdersAction,
  getAllOrdersSuccessAction,
  getOrderByISuccessdAction,
  tryAddOrderAction,
  tryDeleteOrderAction,
  tryGetAllOrdersAction,
  tryGetOrderByIdAction,
  tryUpdateOrderAction,
  updateOrderSuccessAction,
} from '../actions/orders.actions';

@Injectable()
export class OrdersEffects {
  constructor(
    private ordersService: ColOrdersService,
    private actions$: Actions,
    private router: Router,
    private store: Store
  ) {}

  getAllOrdersEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tryGetAllOrdersAction),
      switchMap(() =>
        this.ordersService.collection.pipe(
          map((orders: Order[]) => getAllOrdersSuccessAction({ orders })),
          catchError((error) => of(errorOrdersAction({ error })))
        )
      )
    )
  );

  addOrdersEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tryAddOrderAction),
      switchMap(({ order }: { order: Order }) =>
        this.ordersService.add(order).pipe(
          map((order: Order) => {
            return addOrderSuccessAction({ order });
          }),
          tap(() => {
            this.router.navigate(['list-orders']);
          }),
          catchError((error) => of(errorOrdersAction({ error })))
        )
      )
    )
  );

  getOrderEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tryGetOrderByIdAction),
      switchMap(({ id }: { id: number }) =>
        this.ordersService.getItemById(id).pipe(
          map((order) => getOrderByISuccessdAction({ order })),
          catchError((error) => of(errorOrdersAction({ error })))
        )
      )
    )
  );

  editIdChange$ = createEffect(() =>
    this.store.select(selectRouteParam('id')).pipe(
      map((id) => {
        if (id) {
          return tryGetOrderByIdAction({ id: Number(id) });
        } else {
          return errorOrdersAction({ error: null });
        }
      })
    )
  );

  // QUESTION POUR PIERRE : tap et router navigate ici c'est bien ou pas ?
  updateOrderEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tryUpdateOrderAction),
      switchMap(({ order }: { order: Order }) =>
        this.ordersService.update(order).pipe(
          map((order) => updateOrderSuccessAction({ order: new Order(order) })),
          tap(() => {
            this.router.navigate(['list-orders']);
          }),
          catchError((error) => of(errorOrdersAction({ error })))
        )
      )
    )
  );

  changeStateEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeStateAction),
      switchMap(({ order, state }: { order: Order; state: StateOrder }) =>
        this.ordersService.changeState(order, state).pipe(
          map((order) => tryUpdateOrderAction({ order })),
          catchError((error) => of(errorOrdersAction({ error })))
        )
      )
    )
  );

  deleteOrderEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tryDeleteOrderAction),
      switchMap(({ id }: { id: number }) =>
        this.ordersService.delete(id).pipe(
          map(() => deleteOrderSuccessAction({ id })),
          catchError((error) => of(errorOrdersAction({ error })))
        )
      )
    )
  );
}
