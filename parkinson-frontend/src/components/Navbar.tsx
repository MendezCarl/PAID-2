import React from 'react';
import {Link} from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav style={{ 
            padding: '0.5rem 1rem', 
            backgroundColor: '#2F75B5', 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000
        }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <Link to='/' style={{
                    color: 'white',
                    textDecoration: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    transition: 'background-color 0.2s',
                    fontSize: '1.2rem',
                    fontWeight: 500
                }}>Home</Link>
                <Link to='/profile' style={{
                    color: 'white',
                    textDecoration: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    transition: 'background-color 0.2s',
                    fontSize: '1.2rem',
                    fontWeight: 500
                }}>Profile</Link>
                <Link to='/upload' style={{
                    color: 'white',
                    textDecoration: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    transition: 'background-color 0.2s',
                    fontSize: '1.2rem',
                    fontWeight: 500
                }}>Upload</Link>
                <Link to='/evaluate' style={{
                    color: 'white',
                    textDecoration: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    transition: 'background-color 0.2s',
                    fontSize: '1.2rem',
                    fontWeight: 500
                }}>Evaluate</Link>
                <Link to='/save' style={{
                    color: 'white',
                    textDecoration: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    transition: 'background-color 0.2s',
                    fontSize: '1.2rem',
                    fontWeight: 500
                }}>Save</Link>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: '0.5rem',
                borderRadius: '4px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                marginRight: '0.5rem',
                height: '50px'
            }}>
                <img 
                    src="/UF_Monogram_svg.png" 
                    alt="UF Logo" 
                    style={{ 
                        height: '100%',
                        width: 'auto',
                        objectFit: 'contain'
                    }} 
                />
            </div>
        </nav>
    );
};

export default Navbar;