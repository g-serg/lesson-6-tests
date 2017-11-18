import React, {PureComponent} from 'react';
import Market from '../Market/Market';
import Farm from '../Farm/Farm';
import Budget from '../Budget/Budget';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Market />
        <Farm />
        <Budget />
      </div>
    );
  }
}
