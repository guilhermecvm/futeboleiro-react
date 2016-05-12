import React, { Component } from 'react'
import { Link } from 'react-router'

class MainLayout extends Component {
    render() {
        return (
            <div className="app">
                <header className="primary-header"></header>
                <aside className="primary-aside">
                    <ul>
                        <li><Link to="/" activeClassName="active">Matches</Link></li>
                    </ul>
                </aside>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default MainLayout;
