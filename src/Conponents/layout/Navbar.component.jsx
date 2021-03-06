import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks.component';
import SignedOutLinks from './SignedOutLinks.component';
import { connect } from 'react-redux';

const Navbar = ({ auth }) => {
    const links = auth.uid ? (
        <SignedInLinks />
    ) : (
        <SignedOutLinks />
    )
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className='left logo'>WebdotPlan</Link>
                { links }
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);