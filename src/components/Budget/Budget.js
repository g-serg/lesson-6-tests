import React, {Component} from 'react';
import {
  getProfit,
  getMarket,
  getFarm,
  getDelivery,
  getTotal
} from '../../reducers/budget';
import {connect} from 'react-redux';
import './Budget.css';

export class Budget extends Component {
  render() {
    const {profit, market, farm, delivery, total} = this.props;

    return (
      <div className="budget">
        <h2>Бюджет</h2>
        <p>Всего получено денег: {profit}</p>
        <p>Расходы продавцов: {-market}</p>
        <p>Расходы на ферме: {-farm}</p>
        <p>Расходы на доставку: {-delivery}</p>
        <p>Итого: {total}</p>
      </div>
    );
  }
}

const mapStateToProps = ({budget}) => ({
  profit: getProfit(budget),
  market: getMarket(budget),
  farm: getFarm(budget),
  delivery: getDelivery(budget),
  total: getTotal(budget)
});

export default connect(mapStateToProps)(Budget);
