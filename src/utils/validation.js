import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string('Enter an username')
    .required('Username is required')
    .min(4, 'Username must contain more, than 4 digits')
    .matches(/[a-zA-Z0-9]/, 'Username can only contain Latin letters or digits'),
  password: Yup.string('Enter a password')
    .required('Password is required')
    .min(8, 'Password should  be longer than 8 digits'),
  passwordConfirm: Yup.string('Enter an author')
    .required('Password confirmation is required')
    .oneOf([Yup.ref('password'), null], 'Passwords should match'),
});

export default validationSchema;
