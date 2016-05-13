import React, { Component } from 'react'
import { Link } from 'react-router'

class MainLayout extends Component {
    render() {
        return (
            <div className="app">
                <header style={css.header}>
                    <h1 style={css.headerText}>Futeboleiro</h1>
                </header>
                {/*<aside className="primary-aside">
                    <ul>
                        <li><Link to="/" activeClassName="active">Matches</Link></li>
                    </ul>
                </aside>*/}
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default MainLayout;

var css = {
    header: {
        background: 'rgb(46, 52, 62)',
        color: 'rgb(255, 255, 255)',
        height: '60px',
        position: 'relative'
    },
    headerText: {
        margin: 0,
        fontSize: 24,
        fontWeight: 300,
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translateX(-50%) translateY(-50%)'
    }
};
