import React, {Component} from 'react';
import './form.scss';

const uniqueRandom = require("unique-random");
const rand = uniqueRandom(1000, 9999);

class Form extends Component {

    state = {
        firstName: '',
        lastName: '',
        phone: '',
        age: '',
        formErrors: {firstName: '', lastName: '', phone: '', age: ''},
        firstNameValid: false,
        lastNameValid: false,
        phoneValid: false,
        ageValid: false,
        formValid: false
    };

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => this.validateField(name, value));
    };

    validateField = (fieldName, value) => {
        let fieldValidationErrors = this.state.formErrors;
        let firstNameValid = this.state.firstNameValid;
        let lastNameValid = this.state.lastNameValid;
        let phoneValid = this.state.phoneValid;
        let ageValid = this.state.ageValid;
        switch (fieldName) {
            case 'firstName':
                firstNameValid = value.length > 0;
                fieldValidationErrors.firstName = firstNameValid ? '' : 'Incorrect first name!';
                break;
            case 'lastName':
                lastNameValid = value.length > 0;
                fieldValidationErrors.lastName = lastNameValid ? '' : 'Incorrect last name!';
                break;
            case 'phone':
                phoneValid = Number(value) && value.length < 14 && value.length > 9;
                fieldValidationErrors.phone = phoneValid ? '' : 'Incorrect phone number!';
                break;
            case 'age':
                ageValid = Number(value) && Number(value) < 100 && Number(value) > 0;
                fieldValidationErrors.age = ageValid ? '' : 'Incorrect age!';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            firstNameValid: firstNameValid,
            lastNameValid: lastNameValid,
            phoneValid: phoneValid,
            ageValid: ageValid,
        }, this.validateForm)
    };

    validateForm = () => {
        this.setState({formValid: this.state.firstNameValid && this.state.lastNameValid && this.state.phoneValid && this.state.ageValid});
    };

    addUser = e => {
        e.preventDefault();
        const user = {
            date: new Date(),
            id: rand(),
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            age: this.state.age,
        };
        this.props.addUserToData(user);
        this.setState({firstName: '', lastName: '', phone: '', age: '', formValid: false});
    };

    render() {
        return (
            <section className='form-wrapper'>
                <form onSubmit={this.addUser}>
                    <div className="item">
                        <input type="text" placeholder='First name...' onChange={this.handleChange} name='firstName'
                               value={this.state.firstName}/>
                        <p>{this.state.formErrors.firstName}</p>
                    </div>
                    <div className="item">
                        <input type="text" placeholder='Last name...' onChange={this.handleChange} name='lastName'
                               value={this.state.lastName}/>
                        <p>{this.state.formErrors.lastName}</p>

                    </div>
                    <div className="item">
                        <input type="text" placeholder='Phone...' onChange={this.handleChange} name='phone'
                               value={this.state.phone}/>
                        <p>{this.state.formErrors.phone}</p>
                    </div>
                    <div className="item">
                        <input type="text" min="1" placeholder='Age...' onChange={this.handleChange} name='age'
                               value={this.state.age}/>
                        <p>{this.state.formErrors.age}</p>
                    </div>
                    <input className='button' disabled={!this.state.formValid} type="submit" value='Add user to table'/>
                </form>
            </section>
        )
    }
}

export default Form;
