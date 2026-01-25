import { ArrowRight, CheckCircle, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        100% Free for Freelancers
                    </div>
                    <h1 className="hero-title">
                        Professional Invoicing <br />
                        <span className="text-gradient">Made Simple.</span>
                    </h1>
                    <p className="hero-subtitle">
                        Create beautiful, secure invoices in seconds. No signup required.
                        Export to PDF and get paid faster with ClearBillAI.
                    </p>
                    <div className="hero-actions">
                        <button className="btn-primary btn-xl" onClick={() => document.getElementById('invoice-builder').scrollIntoView({ behavior: 'smooth' })}>
                            Start Invoicing Now <ArrowRight size={20} />
                        </button>
                        <Link to="/invoicing-guide" className="btn-ghost btn-xl">
                            How it works
                        </Link>
                    </div>
                    <div className="hero-features">
                        <div className="feature-item">
                            <CheckCircle size={16} className="feature-icon" />
                            <span>No Watermark</span>
                        </div>
                        <div className="feature-item">
                            <Zap size={16} className="feature-icon" />
                            <span>Instant PDF</span>
                        </div>
                        <div className="feature-item">
                            <Shield size={16} className="feature-icon" />
                            <span>Private & Secure</span>
                        </div>
                    </div>
                </div>
                {/* Abstract Visual Elements */}
                <div className="hero-visuals">
                    <div className="blob blob-1"></div>
                    <div className="blob blob-2"></div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
