import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import * as OrdersReducers from '../reducers/orders.reducer';
import * as OrdersSelectors from './orders.selectors';

describe('[Orders] selectAllOrders', () => {
  it('Should return list of Orders as an array', () => {
    // get state initial
    const initialState = OrdersReducers.initialOrdersState;
    // mock d'un order
    const order = new Order({
      tjmHt: 5000,
      nbJours: 10,
      tva: 20,
      state: StateOrder.CONFIRMED,
      typePresta: 'formation',
      client: 'Capgemini2',
      comment: 'Merci Cap pour les 24k',
      id: 1,
    });
    // push mock in state initial
    initialState.orders.push(order);
    // call selector and memorize in variable
    const orders = OrdersSelectors.selectAllOrders({
      [OrdersReducers.ordersFeatureKey]: initialState,
    });
    // expect si orders est bien egal a un tableau avec un order
    expect(orders).toEqual([order]);
  });
});
describe('[Orders] selectOrderById', () => {
  it('Should return an order', () => {
    // get initial state
    const initialState = OrdersReducers.initialOrdersState;
    // mock order
    const order = new Order({
      tjmHt: 5000,
      nbJours: 10,
      tva: 20,
      state: StateOrder.CONFIRMED,
      typePresta: 'formation',
      client: 'Capgemini2',
      comment: 'Merci Cap pour les 24k',
      id: 1,
    });
    // add order in initial state.selectedOrder
    initialState.selectedOrder = order;
    // call selector and memorize in variable
    const data = OrdersSelectors.selectOrderById({
      [OrdersReducers.ordersFeatureKey]: initialState,
    });
    // expect of data equal order
    expect(data).toEqual(order);
  });
});
