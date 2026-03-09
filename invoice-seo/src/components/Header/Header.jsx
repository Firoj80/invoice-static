import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckSquare } from 'lucide-react';
import './Header.css';

/* ── SVG Icon Components for Drawer ── */
const IconHome = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
    </svg>
);
const IconGuide = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        <line x1="9" y1="7" x2="16" y2="7" /><line x1="9" y1="11" x2="14" y2="11" />
    </svg>
);
const IconBlog = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
);
const IconHelp = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
);
const IconPro = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

/* ── Social Icon Components ── */
const SocialTwitter = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);
const SocialLinkedIn = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);
const SocialGitHub = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);

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
        { to: '/', label: 'Home', internal: true, icon: <IconHome /> },
        { to: '/invoicing-guide', label: 'Invoicing Guide', internal: true, icon: <IconGuide /> },
        { to: '/blog/free-invoice-generator-tool', label: 'Blog', internal: true, icon: <IconBlog /> },
        { to: '/help-center', label: 'Help', internal: true, icon: <IconHelp /> },
        { to: 'https://apps.clearbillai.com/features', label: 'Go Pro ✦', internal: false, icon: <IconPro /> },
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
                            <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
                                <span className="drawer-link-icon-text">
                                    <span className="drawer-link-icon" aria-hidden="true">{link.icon}</span>
                                    <span className="drawer-link-text">{link.label}</span>
                                </span>
                                <svg className="drawer-link-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
                                <span className="drawer-link-icon-text">
                                    <span className="drawer-link-icon" aria-hidden="true">{link.icon}</span>
                                    <span className="drawer-link-text">{link.label}</span>
                                </span>
                                <svg className="drawer-link-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        )
                    )}
                </nav>

                {/* Drawer Footer — CTA + Social + Badge */}
                <div className="drawer-footer">
                    <a
                        href="https://apps.clearbillai.com/auth?mode=login"
                        className="btn-primary drawer-cta-btn"
                        rel="noopener noreferrer"
                    >
                        Login to Pro
                    </a>

                    {/* Social Links */}
                    <div className="drawer-social-row">
                        <a href="https://twitter.com/clearbillai" target="_blank" rel="noopener noreferrer" aria-label="Follow ClearBill AI on X (Twitter)" className="drawer-social-link">
                            <SocialTwitter />
                        </a>
                        <a href="https://linkedin.com/company/clearbillai" target="_blank" rel="noopener noreferrer" aria-label="Follow ClearBill AI on LinkedIn" className="drawer-social-link">
                            <SocialLinkedIn />
                        </a>
                        <a href="https://github.com/clearbillai" target="_blank" rel="noopener noreferrer" aria-label="ClearBill AI on GitHub" className="drawer-social-link">
                            <SocialGitHub />
                        </a>
                    </div>

                    {/* Trust Badge */}
                    <div className="drawer-trust-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        <span>Free forever · No signup needed · 100% private</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
