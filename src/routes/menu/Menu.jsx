/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Menu extends PureComponent {
  render() {
    const { user } = this.props;
    return (
      <>
      Welcome,
        {user}
!
      </>
    );
  }
}

Menu.propTypes = {
  user: PropTypes.object.isRequired,
};

export default withRouter(Menu);
