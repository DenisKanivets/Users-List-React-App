import React, {Component} from 'react';
import Header from "./components/Header";
import Table from "./components/Table";
import Form from "./components/Form";
import SimpleStorage from "react-simple-storage";

class App extends Component {

    state = {
        data: []
    };

    componentDidMount() {
        window.onload = () => {
            let orderData = this.state.data;
            orderData.sort(function (a, b) {
                let nameA = a.date, nameB = b.date;
                if (nameA < nameB)
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0;
            });
            this.setState({data: orderData})
        }
    }

    refreshData = newData => {
        this.setState({data: newData})
    };

    addUserToData = newUser => {
        this.state.data.push(newUser);
        this.setState({data: this.state.data})
    };

    render() {
        return (
            <>
                <SimpleStorage parent={this}/>
                <Header/>
                <Form addUserToData={this.addUserToData}/>
                <Table refreshData={this.refreshData} data={this.state.data}/>
            </>
        )
    }
}

export default App;
