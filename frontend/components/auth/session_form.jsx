import React from "react";

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
        this.props.processForm(user);
    }
    
    update(field) {
        return(e) => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        return (
            <div className="session-form">
                <h2>{this.props.formType}</h2>
                <form>
                    <label>Email:
                        <input 
                            type="text" 
                            value={this.state.email}
                            onChange={this.update('email')}
                        />                        
                    </label>
                    <label>Password:
                        <input 
                            type="password" 
                            value={this.state.password}
                            onChange={this.update('password')}
                        />                        
                    </label>
                    <button onClick={this.handleSubmit}>{this.props.formType}</button>                                     
                </form>
                <p>
                    {this.props.navLink}
                </p>
            </div>
        );
    };
};

export default SessionForm;