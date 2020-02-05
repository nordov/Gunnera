import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/user_actions';
import { openModal } from "../../actions/modal_actions";
import SessionForm from './session_form';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => ({
    formType: "Sign up",
    errors: state.errors.session,
})

const mapDispatchToProps = (dispatch) => ({
    processForm: user => dispatch(signup(user)),
    otherForm: (
        <Link onClick={() => dispatch(openModal('login'))}>
            Log in
        </Link>
    ),
    closeModal: () => dispatch(closeModal())    
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)