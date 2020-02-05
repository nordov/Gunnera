import React from "react";
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }
    
    update(field) {
        return(e) => this.setState({ [field]: e.currentTarget.value });
    }

    renderErrors() {
        let error_arr = [];
        for (var i in this.props.errors)
            error_arr.push(this.props.errors[i]);
        return(
            <ul>
                {error_arr.map((error, i) =>(
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
           <div className="session-form-container">
                <div className="session-form-header">
                    <h2>{this.props.formType}</h2>
                    <div className="close-x">
                        <Link onClick={this.props.closeModal}>X</Link>
                    </div>                     
                </div>
                <div className='session-form-main'>
                    <form>
                        {this.renderErrors()}
                        <input 
                            type="text" 
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        <input 
                            type="password" 
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder ="Password"
                        />

                        <button onClick={this.handleSubmit}>{this.props.formType}</button>                      
                    </form>
                </div>
                <div className="session-form-footer">
                    <p>
                        Do you have an account? {this.props.otherForm}
                    </p>
                </div>
           </div>
        );
    };
};

export default SessionForm;