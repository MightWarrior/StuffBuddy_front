import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from './form';
import Header from '../../layout/components/header/Header';
import './registration.scss';
import validationSchema from '../../utils/validation';

class Registration extends PureComponent {
  render() {
    const { history, userRegister } = this.props;
    const initialValues = { username: '', password: '' };
    return (
      <>
        <Header />
        <div className="registration-wrapper">
          <div className="registration-logo"><h2>LOGIN</h2></div>
          <div className="registration-form">
            <Formik
              component={Form}
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                userRegister(values);
                setTimeout(() => history.push('/menu'), 400);
              }}
            />
          </div>
          <div className="registration-question">Already our member ?</div>
          <Button
            variant={('text', 'outlined')}
            color="inherit"
            onClick={() => { history.push('/login'); }}
          >
        REGISTER
          </Button>
        </div>
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
