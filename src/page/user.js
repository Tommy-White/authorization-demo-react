import React from 'react';
import Authorization from '../authorization';

export default class User extends React.Component {

  render() {
    return <Authorization allowed={this.props.allowed} owned={this.props.owned}>
        <h2>If this pages must can be viewed under authorize</h2>
    </Authorization>
  }
}
