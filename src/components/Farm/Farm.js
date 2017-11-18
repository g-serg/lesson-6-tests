import React, {Component} from 'react';
import {moveOrderToCustomer} from '../../actions/farmActions';
import {getOrders} from '../../reducers/farm';
import Order from '../Order/Order';
import {connect} from 'react-redux';
import './Farm.css';

export class Farm extends Component {
  handleMoveOrderToCustomer = () => {
    const {moveOrderToCustomer, orders} = this.props;
    const movedOrder = orders[orders.length - 1];

    moveOrderToCustomer(movedOrder);
  };

  render() {
    const {orders} = this.props;
    const isMoveToСustomerDisabled = !orders.length;

    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button
          disabled={isMoveToСustomerDisabled}
          onClick={this.handleMoveOrderToCustomer}
        >
          Отправить урожай клиенту
        </button>
        <div className="order-list">
          {orders.map(order => <Order key={order.id} {...order} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({farm}) => ({
  orders: getOrders(farm)
});

const mapDispatchToProps = {
  moveOrderToCustomer
};

export default connect(mapStateToProps, mapDispatchToProps)(Farm);
