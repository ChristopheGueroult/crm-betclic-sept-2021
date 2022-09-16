import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import * as OrdersActions from '../actions/orders.actions';
import * as OrdersReducers from './orders.reducer';

describe('[reducer] ordersRecuder', () => {
  // quand l'action getAllOrdersSuccessAction va etre invoquée on doit verifier
  // que le tableau d'orders passé en payload de l'action getAllOrdersSuccessAction
  // remplace bien ce que contient initialOrdersState.orders en comparant
  // le state initial avec le new state return par le reducer après le dispatch de l'action getAllOrdersSuccessAction
  it('Should set orders in OrdersState', () => {
    const initialState = OrdersReducers.initialOrdersState;
    const orders = [
      new Order({
        tjmHt: 5000,
        nbJours: 10,
        tva: 20,
        state: StateOrder.CONFIRMED,
        typePresta: 'formation',
        client: 'Capgemini2',
        comment: 'Merci Cap pour les 24k',
        id: 1,
      }),
    ];
    const action = OrdersActions.getAllOrdersSuccessAction({ orders });
    const newState = OrdersReducers.ordersReducer(initialState, action);
    expect(newState).toEqual({ ...initialState, orders: orders });
  });

  // quand l'action addOrderSuccessAction est invoquée, on doit verifier
  // que le order passé en paylod de l'action est bien ajouté à initialOrdersState.orders
  // en comparant le state initial avec le state return par le reducer après le dispatch de l'action
  it('Should add an Order in OrdersState.orders', () => {
    const initialState = OrdersReducers.initialOrdersState;
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
    const action = OrdersActions.addOrderSuccessAction({ order });
    const newState = OrdersReducers.ordersReducer(initialState, action);
    expect(newState).toEqual({
      ...initialState,
      orders: [...initialState.orders, order],
    });
  });
});
