import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
    formType: "Log in",
    errors: state.errors.session,
    navLink: <Link to="/signup">Sign up instead</Link>
})

const mapDispatchToProps = (dispatch) => ({
    processForm: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)