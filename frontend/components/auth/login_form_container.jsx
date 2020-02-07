import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from "../../actions/modal_actions";
import SessionForm from './session_form';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => ({
    formType: "Log in",
    errors: state.errors.session.responseJSON
})

const mapDispatchToProps = (dispatch) => ({
    processForm: user => dispatch(login(user)),
    otherForm: (
        <Link to="/" onClick={() => dispatch(openModal('signup'))}>
            Signup
        </Link>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)