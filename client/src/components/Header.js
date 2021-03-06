import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Inicia Sesión con tu cuenta de Google</a></li>;
            default:
                return [
                    <li key="1" ><Payments /></li>,
                    <li key="3" style={{ margin: '0 10px' }}>
                        <b>Creditos de uso:</b> {this.props.auth.credits}
                    </li>,
                    <li key="2" ><a href="/api/logout">Cerrar sesión</a></li>
                ];
        }
    }

    render() {
        return (
            <div className="container">
                <div className="container-fluid">
                    <nav >
                        <div className="nav-wrapper">
                            <Link
                                to={this.props.auth ? '/surveys' : '/'}
                                className="left brand-logo"
                            >
                                Cesar Emails
                    </Link>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                {this.renderContent()}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);