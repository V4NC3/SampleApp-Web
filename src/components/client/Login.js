import React from 'react';
import { connect } from 'react-redux';
import {loginUser} from '../../components/actions/UserActions'
import InputComponent from '../../utils/InputComponent';

class Login extends React.Component {

    constructor(props) {
        super(props);
        //setting the condition: when normal or initial state of the inputComponent on startUp
        this.state = {
            firstName: ""
            , lastName: ""
            , email: ""
            , password: ""
            , confirmPassword: ""

            //form validation
            , formErrors: { email: '', password: '' }
            , emailValid: false
            , passwordValid: false
            , formValid: false

        };
        //returning the INPUT area to empty values on startUp
        //created a CHANGE handlers that will check for CHANGES made to the input values
        this.handleChange = this.handleChange.bind(this);
        //the above is an Event Handler
    }
    handleChange = (evt) => {
        //console.log(evt.target.name);
        //console.log(evt.target.value);
        const name = evt.target.name;
        const value = evt.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    };

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    render() {
        return (
            <div>
                <p>This is the Login page...</p>
                <form>

                    <InputComponent 
                        type="text" 
                        id="email" 
                        label="Email: " 
                        isRequired="true" 
                        placeHolder="Email" 
                        value={this.state.email} 
                        onChange={this.handleChange} />

                    <InputComponent 
                        type="password" 
                        id="password" 
                        label="Password: " 
                        isRequired="true" 
                        placeHolder="Password" 
                        value={this.state.password} 
                        onChange={this.handleChange} />
                    <br />

                    <button onClick={() => {
                        this.props.login({ email: 'tester9000@gmail.com', password: 'tester9000' });
                        this.props.history.push("/");
                    }}>Login</button>

           
                </form>



            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.UserReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => {
            dispatch(loginUser(data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);