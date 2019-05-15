import React, {Component} from 'react';
import './header.scss';

class Header extends Component {

    render() {

        return (
            <>
                <header>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
                        alt="react logo"/>
                    <h1>Users List React App</h1>
                </header>
            </>
        )
    }
}

export default Header;
