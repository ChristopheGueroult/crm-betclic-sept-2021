import { createAction, props } from '@ngrx/store';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

// try get all orders
export const tryGetAllOrdersAction = createAction(
  '[Orders] try get all orders'
);
// get all orders
export const getAllOrdersSuccessAction = createAction(
  '[Orders] get all orders success',
  props<{ orders: Order[] }>()
);

// try add order
export const tryAddOrderAction = createAction(
  '[Orders] try add order',
  props<{ order: Order }>()
);

// add order
export const addOrderSuccessAction = createAction(
  '[Orders] add order',
  props<{ order: Order }>()
);

// try update order
export const tryUpdateOrderAction = createAction(
  '[Orders] try update order',
  props<{ order: Order }>()
);

// update order
export const updateOrderSuccessAction = createAction(
  '[Orders] update order',
  props<{ order: Order }>()
);

// try change order
export const changeStateAction = createAction(
  '[Orders] change state',
  props<{ order: Order; state: StateOrder }>()
);

// try delete order
export const tryDeleteOrderAction = createAction(
  '[Orders] try delete order',
  props<{ id: number }>()
);

// delete order
export const deleteOrderSuccessAction = createAction(
  '[Orders] delete order',
  props<{ id: number }>()
);

// try get order by id
export const tryGetOrderByIdAction = createAction(
  '[ todos ] try get order by id',
  props<{ id: number }>()
);
// get order by id
export const getOrderByISuccessdAction = createAction(
  '[ todos ] get order by id',
  props<{ order: Order }>()
);

// generic error
export const errorOrdersAction = createAction(
  '[Orders] error orders',
  props<{ error: any }>()
);
