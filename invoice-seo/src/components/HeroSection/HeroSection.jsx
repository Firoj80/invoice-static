import { ArrowRight, CheckCircle, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section" aria-label="Hero">
            <div className="hero-content">
                <div className="hero-text">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        100% Free for Freelancers &amp; Small Businesses
                    </div>
                    {/* ✅ SEO: One clear H1 per page with primary keyword */}
                    <h1 className="hero-title">
                        Free Online Invoice Generator —{' '}
                        <span className="text-gradient">Create Invoices in Seconds.</span>
                    </h1>
                    <p className="hero-subtitle">
                        Build beautiful, professional invoices instantly with ClearBill AI.
                        No signup required. Export to PDF and get paid faster.
                    </p>
                    <div className="hero-actions">
                        <button
                            className="btn-primary btn-xl"
                            onClick={() => document.getElementById('invoice-builder').scrollIntoView({ behavior: 'smooth' })}
                            aria-label="Start creating your invoice now"
                        >
                            Start Invoicing Now <ArrowRight size={20} />
                        </button>
                        <Link to="/invoicing-guide" className="btn-ghost btn-xl">
                            How it works
                        </Link>
                    </div>
                    <div className="hero-features">
                        <div className="feature-item">
                            <CheckCircle size={16} className="feature-icon" aria-hidden="true" />
                            <span>No Watermark</span>
                        </div>
                        <div className="feature-item">
                            <Zap size={16} className="feature-icon" aria-hidden="true" />
                            <span>Instant PDF Download</span>
                        </div>
                        <div className="feature-item">
                            <Shield size={16} className="feature-icon" aria-hidden="true" />
                            <span>Private &amp; Secure</span>
                        </div>
                    </div>
                </div>
                <div className="hero-visuals" aria-hidden="true">
                    <div className="blob blob-1"></div>
                    <div className="blob blob-2"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
