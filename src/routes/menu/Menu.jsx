/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Menu extends PureComponent {
  render() {
    const { user } = this.props;
    return (
      <>
      Welcome,
        {user.result.username}
!
      </>
    );
  }
}

Menu.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Menu;
