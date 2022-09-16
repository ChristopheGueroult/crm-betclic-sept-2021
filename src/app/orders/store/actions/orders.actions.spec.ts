import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import * as OrderActions from './orders.actions';

describe('[action] tryGetAllOrdersAction', () => {
  it('Should create a tryGetAllOrdersAction', () => {
    const action = OrderActions.tryGetAllOrdersAction();
    expect(action).toEqual({
      type: '[Orders] try get all orders',
    });
  });

  it('Should create a getAllOrdersSuccessAction', () => {
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
    const action = OrderActions.getAllOrdersSuccessAction({ orders });
    expect(action).toEqual({
      type: '[Orders] get all orders success',
      orders: orders,
    });
  });
});
