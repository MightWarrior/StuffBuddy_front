/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const Form = (props) => {
  const {
    values: { username, password },
    handleChange,
    isValid,
    setFieldTouched,
    handleSubmit,
  } = props;

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="username"
        name="username"
        label="Username"
        value={username}
        onChange={change.bind(null, 'username')}
        fullWidth
      />
      <TextField
        id="password"
        name="password"
        type="password"
        label="Password"
        value={password}
        onChange={change.bind(null, 'password')}
        fullWidth
      />
      <Button
        type="submit"
        variant={('text', 'outlined')}
        color="primary"
        fullWidth
        disabled={!isValid}
      >
        Submit
      </Button>
    </form>
  );
};

Form.propTypes = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
};

export default Form;
