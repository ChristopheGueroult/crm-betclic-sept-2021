import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Order } from 'src/app/core/models/order';
import { ordersFeatureKey, OrdersState } from '../reducers/orders.reducer';

export const selectOrdersFeature =
  createFeatureSelector<OrdersState>(ordersFeatureKey);

export const selectAllOrders = createSelector(
  selectOrdersFeature,
  (state: OrdersState): Order[] => {
    return state.orders;
  }
);

// export const selectOrderById = createSelector(
//   selectAllOrders,
//   selectRouteParams,
//   (orders: Order[], params: Params) => {
//     const id = Number(params['id']);
//     console.log(id);
//     console.log(orders);

//     if (id && orders.length) {
//       return orders.find((t) => t.id === id);
//     } else {
//       return null;
//     }
//   }
// );

export const selectOrderById = createSelector(
  selectOrdersFeature,
  (state: OrdersState): Order | null => {
    return state.selectedOrder;
  }
);
