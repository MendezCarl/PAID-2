import React from 'react';
import {Link} from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
            <Link to='/' style={{marginRight: '1rem'}}>Home</Link>
            <Link to='/profile' style={{marginRight: '1rem'}}>Profile</Link>
            <Link to='/upload' style={{marginRight: '1rem'}}>Upload</Link>
            <Link to='/evaulate' style={{marginRight: '1rem'}}>Evaluate</Link>
            <Link to='/save' style={{marginRight: '1rem'}}>Save</Link>
            
        </nav>
    );
};

export default Navbar;