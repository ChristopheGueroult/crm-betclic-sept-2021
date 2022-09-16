import { createReducer, on } from '@ngrx/store';
import { Order } from 'src/app/core/models/order';
import * as ordersActions from '../actions/orders.actions';

export interface OrdersState {
  orders: Order[];
  error: any;
  selectedOrder: Order | null;
}

export const initialOrdersState: OrdersState = {
  orders: [],
  error: null,
  selectedOrder: null,
};

export const ordersFeatureKey = 'orders';

export const ordersReducer = createReducer(
  initialOrdersState,
  on(
    ordersActions.getAllOrdersSuccessAction,
    (state: OrdersState, { orders }: { orders: Order[] }): OrdersState => {
      return {
        ...state,
        orders: [...orders],
      };
    }
  ),
  on(
    ordersActions.errorOrdersAction,
    (state: OrdersState, { error }: { error: any }): OrdersState => {
      return {
        ...state,
        error: error,
      };
    }
  ),
  on(
    ordersActions.addOrderSuccessAction,
    (state: OrdersState, { order }: { order: Order }): OrdersState => {
      return {
        ...state,
        orders: [...state.orders, order],
      };
    }
  ),
  on(
    ordersActions.getOrderByISuccessdAction,
    (state: OrdersState, { order }: { order: Order }): OrdersState => {
      return {
        ...state,
        selectedOrder: order,
      };
    }
  ),
  on(
    ordersActions.updateOrderSuccessAction,
    (state: OrdersState, { order }: { order: Order }): OrdersState => {
      return {
        ...state,
        orders: state.orders.map((item) =>
          item.id !== order.id ? item : order
        ),
      };
    }
  ),
  on(
    ordersActions.deleteOrderSuccessAction,
    (state: OrdersState, { id }: { id: number }): OrdersState => {
      return {
        ...state,
        orders: state.orders.filter((item) => item.id !== id),
      };
    }
  )
);
