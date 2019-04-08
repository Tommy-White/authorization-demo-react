import React from 'react';

const Authorization = (WrappedComponent, allowed) =>
  class WithAuthorization extends React.Component {
    constructor(props) {
      super(props)

      // In this case the owned is hardcoded, but it could be loaded from anywhere.
      // Redux, MobX, RxJS, Backbone...
      this.state = {
        owned: props.owned
      }
    }
    render() {
      const { owned } = this.state
      if (allowed.includes(owned)) {
        return <WrappedComponent {...this.props} />
      } else {
        return '403 not permission'
      }
    }
  }

export default Authorization;
