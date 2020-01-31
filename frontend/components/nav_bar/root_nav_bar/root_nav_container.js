import { logout } from '../../../actions/session_actions';
import { connect } from 'react-redux';
import RootNavBar from './root_nav_bar';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(RootNavBar);
