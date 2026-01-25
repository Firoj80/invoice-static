import { Github, Twitter, Linkedin, Instagram, CheckSquare } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Brand Column */}
                <div className="footer-col brand-col">
                    <div className="footer-brand">
                        <div className="logo-icon-wrapper">
                            <CheckSquare size={24} className="logo-icon" />
                        </div>
                        <div className="logo-text-group">
                            <span className="logo-text-main">ClearBill</span>
                            <span className="logo-text-sub">AI</span>
                        </div>
                    </div>
                    <p className="brand-desc">
                        ClearBillAI provides an easy-to-use invoice generation tool that helps
                        businesses create professional invoices quickly.
                    </p>
                    <div className="social-links">
                        <a href="#" aria-label="YouTube"><Twitter size={20} /></a>
                        {/* Using Twitter icon as placeholder for YouTube if Lucide doesn't have a filled YouTube, 
                actually Lucide has Youtube. changing to Youtube in update */}
                        <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href="#" aria-label="Facebook"><Github size={20} /></a>
                        {/* Placeholder for Facebook */}
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                    </div>
                </div>

                {/* Resources Column */}
                <div className="footer-col">
                    <h3>Resources</h3>
                    <ul className="footer-links">
                        <li><a href="/invoicing-guide">Invoicing Guide</a></li>
                        <li><a href="/help-center">Help Center</a></li>
                    </ul>
                </div>

                {/* Legal Column */}
                <div className="footer-col">
                    <h3>Legal</h3>
                    <ul className="footer-links">
                        <li><a href="/terms">Terms of Service</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Company Column */}
                <div className="footer-col">
                    <h3>Company</h3>
                    <ul className="footer-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} ClearBillAI. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
