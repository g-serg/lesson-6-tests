import React, {Component} from 'react';
import {createOrder, moveOrderToFarm} from '../../actions/marketActions';
import {getOrders} from '../../reducers/market';
import Order from '../Order/Order';
import {connect} from 'react-redux';
import './Market.css';

let id = 0;
const getId = () => {
  id += 1;
  return id;
};
export const vegetables = [
  'Капуста',
  'Редиска',
  'Огурцы',
  'Морковь',
  'Горох',
  'Баклажан',
  'Тыква',
  'Чеснок',
  'Лук',
  'Перец',
  'Картофель',
  'Редька'
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date()
  };
};

export class Market extends Component {
  handleCreateOrder = () => {
    const {createOrder} = this.props;
    const newOrder = getNewOrder();

    createOrder(newOrder);
  };

  handleMoveOrderToFarm = () => {
    const {moveOrderToFarm, orders} = this.props;
    const movedOrder = orders[orders.length - 1];

    moveOrderToFarm(movedOrder);
  };

  render() {
    const {orders} = this.props;
    const isMoveToOrderDisabled = !orders.length;

    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button
          className="new-orders__create-button"
          onClick={this.handleCreateOrder}
        >
          Создать заказ
        </button>
        <button
          disabled={isMoveToOrderDisabled}
          onClick={this.handleMoveOrderToFarm}
        >
          Отправить заказ на ферму
        </button>
        <div className="order-list">
          {orders.map(order => <Order key={order.id} {...order} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({market}) => ({
  orders: getOrders(market)
});

const mapDispatchToProps = {
  createOrder,
  moveOrderToFarm
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
