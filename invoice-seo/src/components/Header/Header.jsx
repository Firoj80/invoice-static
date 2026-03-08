import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckSquare } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    }, [isMobileMenuOpen]);

    const navLinks = [
        { to: '/', label: 'Home', internal: true },
        { to: '/invoicing-guide', label: 'Invoicing Guide', internal: true },
        { to: '/help-center', label: 'Help', internal: true },
        { to: 'https://apps.clearbillai.com/features', label: 'Go Pro ✦', internal: false },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`} role="banner">
            <div className="header-container">

                {/* Logo */}
                <Link to="/" className="logo" aria-label="ClearBill AI — Free Invoice Generator Home">
                    <div className="logo-icon-wrapper">
                        <CheckSquare size={22} className="logo-icon" aria-hidden="true" />
                    </div>
                    <div className="logo-text-group">
                        <span className="logo-text-main">ClearBill</span>
                        <span className="logo-text-sub">AI</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="header-nav desktop-nav" aria-label="Main navigation">
                    {navLinks.map(link =>
                        link.internal ? (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
                            >
                                {link.label}
                            </Link>
                        ) : (
                            <a key={link.to} href={link.to} className="nav-link nav-link-pro" rel="noopener noreferrer">
                                {link.label}
                            </a>
                        )
                    )}
                    <a
                        href="https://apps.clearbillai.com/auth?mode=login"
                        className="btn-primary btn-sm header-login-btn"
                        rel="noopener noreferrer"
                    >
                        Login
                    </a>
                </nav>

                {/* Hamburger Button */}
                <button
                    className={`hamburger-btn ${isMobileMenuOpen ? 'is-open' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    <span className="hamburger-box">
                        <span className="hamburger-bar bar-top"></span>
                        <span className="hamburger-bar bar-mid"></span>
                        <span className="hamburger-bar bar-bot"></span>
                    </span>
                </button>
            </div>

            {/* Mobile Drawer Overlay */}
            <div
                className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-hidden="true"
            />

            {/* Mobile Drawer */}
            <div
                id="mobile-menu"
                className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}
                aria-hidden={!isMobileMenuOpen}
                role="dialog"
                aria-label="Navigation menu"
            >
                {/* Drawer Header */}
                <div className="drawer-header">
                    <Link to="/" className="logo" onClick={() => setIsMobileMenuOpen(false)}>
                        <div className="logo-icon-wrapper">
                            <CheckSquare size={20} className="logo-icon" aria-hidden="true" />
                        </div>
                        <div className="logo-text-group">
                            <span className="logo-text-main">ClearBill</span>
                            <span className="logo-text-sub">AI</span>
                        </div>
                    </Link>
                    <button
                        className="drawer-close-btn"
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>

                {/* Drawer Nav Links */}
                <nav className="drawer-nav" aria-label="Mobile navigation">
                    {navLinks.map((link, i) =>
                        link.internal ? (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`drawer-link ${location.pathname === link.to ? 'active' : ''}`}
                                style={{ '--i': i }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span className="drawer-link-text">{link.label}</span>
                                <svg className="drawer-link-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                        ) : (
                            <a
                                key={link.to}
                                href={link.to}
                                className="drawer-link drawer-link-pro"
                                style={{ '--i': i }}
                                rel="noopener noreferrer"
                            >
                                <span className="drawer-link-text">{link.label}</span>
                                <svg className="drawer-link-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        )
                    )}
                </nav>

                {/* Drawer CTA */}
                <div className="drawer-footer">
                    <a
                        href="https://apps.clearbillai.com/auth?mode=login"
                        className="btn-primary drawer-cta-btn"
                        rel="noopener noreferrer"
                    >
                        Login to Pro
                    </a>
                    <p className="drawer-tagline">Free invoice generator — no signup needed</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
