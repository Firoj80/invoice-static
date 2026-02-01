import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckSquare, Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Close menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
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

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Nav */}
                <nav className="header-nav desktop-nav">
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                    <Link to="/invoicing-guide" className={`nav-link ${location.pathname === '/invoicing-guide' ? 'active' : ''}`}>Invoicing Guide</Link>
                    <Link to="/help-center" className={`nav-link ${location.pathname === '/help-center' ? 'active' : ''}`}>Help</Link>
                    <a href="https://apps.clearbillai.com/features" className="nav-link">Go Pro</a>
                    <a href="https://apps.clearbillai.com/auth?mode=login" className="btn-primary btn-sm" style={{ textDecoration: 'none' }}>Login</a>
                </nav>

                {/* Mobile Nav Overlay */}
                <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
                    <nav className="mobile-nav">
                        <Link to="/" className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                        <Link to="/invoicing-guide" className={`mobile-nav-link ${location.pathname === '/invoicing-guide' ? 'active' : ''}`}>Invoicing Guide</Link>
                        <Link to="/help-center" className={`mobile-nav-link ${location.pathname === '/help-center' ? 'active' : ''}`}>Help</Link>
                        <a href="https://apps.clearbillai.com/features" className="mobile-nav-link">Go Pro</a>
                        <div className="mobile-nav-divider"></div>
                        <a href="https://apps.clearbillai.com/auth?mode=login" className="btn-primary btn-full">Login</a>
                    </nav>
                </div>
            </div >
        </header >
    );
};

export default Header;
