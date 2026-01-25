import { Link, useLocation } from 'react-router-dom';
import { CheckSquare } from 'lucide-react';
import './Header.css';

const Header = () => {
    const location = useLocation();

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-brand">
                    <Link to="/" className="logo">
                        <div className="logo-icon-wrapper">
                            <CheckSquare size={24} className="logo-icon" />
                        </div>
                        <div className="logo-text-group">
                            <span className="logo-text-main">ClearBill</span>
                            <span className="logo-text-sub">AI</span>
                        </div>
                    </Link>
                </div>

                <nav className="header-nav">
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                    <Link to="/invoicing-guide" className={`nav-link ${location.pathname === '/invoicing-guide' ? 'active' : ''}`}>Invoicing Guide</Link>
                    <Link to="/help-center" className={`nav-link ${location.pathname === '/help-center' ? 'active' : ''}`}>Help</Link>
                    <a href="https://apps.clearbillai.com/features" className="nav-link">Go Pro</a>
                    <a href="https://apps.clearbillai.com/auth?mode=login" className="btn-primary btn-sm" style={{ textDecoration: 'none' }}>Login</a>
                </nav>
            </div >
        </header >
    );
};

export default Header;
