import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from './form';


class Login extends PureComponent {
  render() {
    const { history, userLogin } = this.props;
    const initialValues = { username: '', password: '' };
    return (
      <>
        <center>
          <h1>LOGIN</h1>
        </center>
        <center>
          <Button
            variant={('text', 'outlined')}
            color="inherit"
            onClick={() => { history.push('/register'); }}
          >
        REGISTER
          </Button>
        </center>
        <Formik
          component={Form}
          initialValues={initialValues}
          onSubmit={(values) => {
            userLogin(values);
            setTimeout(() => history.push('/menu'), 400);
          }}
        />
      </>
    );
  }
}
Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Login);
