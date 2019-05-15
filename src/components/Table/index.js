import React, {Component} from 'react';
import './table.scss';

class Table extends Component {

    deleteUser = (id) => {
        const data = this.props.data;
        const updatedData = data.filter(item => item.id !== id);
        this.props.refreshData(updatedData)
    };

    AZFirstNameOrderFunc = () => {
        let orderData = this.props.data;
        orderData.sort(function (a, b) {
            let nameA = a.firstName.toLowerCase(), nameB = b.firstName.toLowerCase();
            if (nameA < nameB)
                return -1;
            if (nameA > nameB)
                return 1;
            return 0;
        });
        this.props.refreshData(orderData)
    };

    ZAFirstNameOrderFunc = () => {
        let orderData = this.props.data;
        orderData.sort(function (a, b) {
            let nameA = a.firstName.toLowerCase(), nameB = b.firstName.toLowerCase();
            if (nameA < nameB)
                return 1;
            if (nameA > nameB)
                return -1;
            return 0;
        });
        this.props.refreshData(orderData)
    };

    AZLastNameOrderFunc = () => {
        let orderData = this.props.data;
        orderData.sort(function (a, b) {
            let nameA = a.lastName.toLowerCase(), nameB = b.lastName.toLowerCase();
            if (nameA < nameB)
                return -1;
            if (nameA > nameB)
                return 1;
            return 0;
        });
        this.props.refreshData(orderData)
    };

    ZALastNameOrderFunc = () => {
        let orderData = this.props.data;
        orderData.sort(function (a, b) {
            let nameA = a.lastName.toLowerCase(), nameB = b.lastName.toLowerCase();
            if (nameA < nameB)
                return 1;
            if (nameA > nameB)
                return -1;
            return 0;
        });
        this.props.refreshData(orderData)
    };

    startPhoneOrderFunc = () => {
        let orderData = this.props.data;
        orderData.sort(function (a, b) {
            let nameA = a.phone, nameB = b.phone;
            if (nameA < nameB)
                return -1;
            if (nameA > nameB)
                return 1;
            return 0;
        });
        this.props.refreshData(orderData)
    };

    endPhoneOrderFunc = () => {
        let orderData = this.props.data;
        orderData.sort(function (a, b) {
            let nameA = a.phone, nameB = b.phone;
            if (nameA < nameB)
                return 1;
            if (nameA > nameB)
                return -1;
            return 0;
        });
        this.props.refreshData(orderData)
    };

    youngAgeOrderFunc = () => {
        let orderData = this.props.data;
        orderData.sort(function (a, b) {
            let nameA = Number(a.age), nameB = Number(b.age);
            if (nameA < nameB)
                return -1;
            if (nameA > nameB)
                return 1;
            return 0;
        });
        this.props.refreshData(orderData)
    };

    oldAgeOrderFunc = () => {
        let orderData = this.props.data;
        orderData.sort(function (a, b) {
            let nameA = Number(a.age), nameB = Number(b.age);
            if (nameA < nameB)
                return 1;
            if (nameA > nameB)
                return -1;
            return 0;
        });
        this.props.refreshData(orderData)
    };

    render() {
        if (this.props.data.length > 0) {
            let content = this.props.data.map((item, i) => {
                i++;
                return (
                    <tr key={i}>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.phone}</td>
                        <td>{item.age}</td>
                        <td>
                            <button onClick={() => this.deleteUser(item.id)}>Delete</button>
                        </td>
                    </tr>
                )
            });

            return (
                <>
                    <table>
                        <thead>
                        <tr>
                            <td>
                                <p>First name</p>
                                <button onClick={this.AZFirstNameOrderFunc}>&#8593; A-Z</button>
                                <button onClick={this.ZAFirstNameOrderFunc}>&#x2193; Z-A</button>
                            </td>
                            <td>
                                <p>Last name</p>
                                <button onClick={this.AZLastNameOrderFunc}>&#8593; A-Z</button>
                                <button onClick={this.ZALastNameOrderFunc}>&#x2193; Z-A</button>
                            </td>
                            <td>
                                <p>Phone</p>
                                <button onClick={this.startPhoneOrderFunc}>&#8593; 0-9</button>
                                <button onClick={this.endPhoneOrderFunc}>&#x2193; 9-0</button>
                            </td>
                            <td>
                                <p>Age</p>
                                <button onClick={this.youngAgeOrderFunc}>&#8593; The youngest</button>
                                <button onClick={this.oldAgeOrderFunc}>&#x2193; The oldest</button>
                            </td>
                            <td/>
                        </tr>
                        </thead>
                        <tbody>{content}</tbody>
                    </table>
                </>
            )
        } else {
            return (
                <>
                    <table>
                        <thead>
                        <tr>
                            <td>
                                <p>First name</p>
                                <button onClick={this.AZFirstNameOrderFunc}>&#8593; A-Z</button>
                                <button onClick={this.ZAFirstNameOrderFunc}>&#x2193; Z-A</button>
                            </td>
                            <td>
                                <p>Last name</p>
                                <button onClick={this.AZLastNameOrderFunc}>&#8593; A-Z</button>
                                <button onClick={this.ZALastNameOrderFunc}>&#x2193; Z-A</button>
                            </td>
                            <td>
                                <p>Phone</p>
                                <button onClick={this.startPhoneOrderFunc}>&#8593; 0-9</button>
                                <button onClick={this.endPhoneOrderFunc}>&#x2193; 9-0</button>
                            </td>
                            <td>
                                <p>Age</p>
                                <button onClick={this.youngAgeOrderFunc}>&#8593; The youngest</button>
                                <button onClick={this.oldAgeOrderFunc}>&#x2193; The oldest</button>
                            </td>
                            <td/>
                        </tr>
                        </thead>
                    </table>
                    <p className='empty'>USERS NOT ADDED ;(</p>
                </>
            )
        }
    }
}

export default Table;
