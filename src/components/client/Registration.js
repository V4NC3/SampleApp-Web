import React from "react";
// WHEN JS is completed, convert to JSX format and create an inputComponent obj to store the inputs 

//Need to IMPORT the 'inportComponent' that's in a different FOLDER of the COMPONENT
import InputComponent from '../../utils/InputComponent';
import FormErrors from '../../utils/InputComponent';


class Register extends React.Component {
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
        console.log(evt.target.name);
        console.log(evt.target.value);
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
            //when running REACT, you can only return ONE element.  So, NEED to wrap the content into ONE DIV
            <div>
                <h2>Hello World!</h2>
                <p>This is the Register page...</p>

                <form>

                    <div className="panel panel-default">
                        <FormErrors formErrors={this.state.formErrors} />
                    </div>

                    <InputComponent type="text" id="firstName" label="First Name: " isRequired="true" placeHolder="John" value={this.state.firstName} onChange={this.handleChange} />

                    <InputComponent type="text" id="lastName" label="Last Name: " isRequired="true" placeHolder="Smith" value={this.state.lastName} onChange={this.handleChange} />

                    <InputComponent type="text" id="email" label="Email: " isRequired="true" placeHolder="Email" value={this.state.email} onChange={this.handleChange} />

                    <InputComponent type="password" id="password" label="Password: " isRequired="true" placeHolder="Password" value={this.state.password} onChange={this.handleChange} />

                    <InputComponent type="confirmPassword" id="confirmPassword" label="Confirm Password: " isRequired="true" placeHolder="********" value={this.state.confirmPassword} onChange={this.handleChange} />

                    <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Submit</button>

                </form>

            </div>
        );
    }
}

export default Register;
