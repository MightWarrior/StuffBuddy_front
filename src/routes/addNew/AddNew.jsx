import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Form from './Form';

import validationSchema from '../../utils/validation';

class AddNew extends PureComponent {
  render() {
    const { history, postCards } = this.props;
    const initialValues = {
      DeviceType: '',
      Name: '',
      Description: '',
      Price: '',
    };
    return (
      <>
        <center>
          <Button
            variant={('text', 'outlined')}
            color="black"
            onClick={() => {
              history.push('/menu');
            }}
          >
            GO BACK
          </Button>
          <h1>ADD NEW CARD</h1>
        </center>
        <Formik
          component={Form}
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={(values) => {
            postCards(values);
            setTimeout(() => history.push('/menu'), 400);
          }}
        />
      </>
    );
  }
}
AddNew.propTypes = {
  postCards: PropTypes.func.isRequired,
  history: PropTypes.element.isRequired,
};

export default withRouter(AddNew);
