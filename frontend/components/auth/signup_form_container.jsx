import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/user_actions';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
    formType: "Sign up",
    errors: state.errors.session,
    navLink: <Link to="/login">Log in instead</Link>
})

const mapDispatchToProps = (dispatch) => ({
    processForm: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)