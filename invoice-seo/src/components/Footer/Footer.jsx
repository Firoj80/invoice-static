import { Twitter, Linkedin, Github, Instagram, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" role="contentinfo">
            <div className="footer-container">

                {/* Brand Column */}
                <div className="footer-col brand-col">
                    <div className="footer-brand">
                        <div className="logo-icon-wrapper">
                            <CheckSquare size={24} className="logo-icon" aria-hidden="true" />
                        </div>
                        <div className="logo-text-group">
                            <span className="logo-text-main">ClearBill</span>
                            <span className="logo-text-sub">AI</span>
                        </div>
                    </div>
                    <p className="brand-desc">
                        ClearBill AI is a free, AI-powered online invoice generator that helps
                        freelancers and small businesses create professional invoices instantly.
                    </p>
                    {/* ✅ SEO: social links with descriptive aria-labels */}
                    <div className="social-links">
                        <a href="https://twitter.com/clearbillai" aria-label="Follow ClearBill AI on Twitter" rel="noopener noreferrer" target="_blank">
                            <Twitter size={20} />
                        </a>
                        <a href="https://linkedin.com/company/clearbillai" aria-label="Follow ClearBill AI on LinkedIn" rel="noopener noreferrer" target="_blank">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://github.com/Firoj80/invoice-static" aria-label="ClearBill AI on GitHub" rel="noopener noreferrer" target="_blank">
                            <Github size={20} />
                        </a>
                        <a href="https://instagram.com/clearbillai" aria-label="Follow ClearBill AI on Instagram" rel="noopener noreferrer" target="_blank">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>

                {/* Resources Column */}
                <div className="footer-col">
                    <h3>Resources</h3>
                    <ul className="footer-links">
                        <li><Link to="/invoicing-guide">Invoicing Guide</Link></li>
                        <li><Link to="/blog/free-invoice-generator-guide">Blog</Link></li>
                        <li><Link to="/help-center">Help Center</Link></li>
                    </ul>
                </div>

                {/* Legal Column */}
                <div className="footer-col">
                    <h3>Legal</h3>
                    <ul className="footer-links">
                        <li><Link to="/terms">Terms of Service</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Company Column */}
                <div className="footer-col">
                    <h3>Company</h3>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li>
                            <a href="https://apps.clearbillai.com/features" rel="noopener noreferrer">
                                Go Pro
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="footer-bottom">
                {/* ✅ SEO: brand name consistent, descriptive copyright */}
                <p>
                    &copy; {new Date().getFullYear()} <strong>ClearBill AI</strong>. All rights reserved.
                    Free invoice generator for freelancers &amp; small businesses.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
