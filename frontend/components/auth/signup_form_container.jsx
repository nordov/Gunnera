import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/user_actions';
import { openModal, closeModal } from "../../actions/modal_actions";
import SessionForm from './session_form';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => ({
    formType: "Sign up",
    errors: state.entities.users.responseJSON
})

const mapDispatchToProps = (dispatch) => ({
    processForm: user => dispatch(signup(user)),
    otherForm: (
        <Link to="/" onClick={() => dispatch(openModal('login'))}>
            Log in
        </Link>
    ),
    closeModal: () => dispatch(closeModal())    
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)