import { connect } from 'react-redux';
import Profile from './Profile';
import { userChange } from '../../redux/auth/authActions';

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

const mapDispatchTpProps = {
  userChange,
};

export default connect(mapStateToProps, mapDispatchTpProps)(Profile);
