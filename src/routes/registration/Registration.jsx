import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from './form';

import validationSchema from '../../utils/validation';

class Registration extends PureComponent {
  render() {
    const { history, userRegister } = this.props;
    const initialValues = { username: '', password: '' };
    return (
      <>
        <center>
          <h1>REGISTER</h1>
        </center>
        <center>
          <Button
            variant={('text', 'outlined')}
            color="inherit"
            onClick={() => { history.push('/login'); }}
          >
        LOGIN
          </Button>
        </center>
        <Formik
          component={Form}
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={(values) => {
            userRegister(values);
            setTimeout(() => history.push('/menu'), 400);
          }}
        />
      </>
    );
  }
}
Registration.propTypes = {
  userRegister: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Registration);
