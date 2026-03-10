import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// Home is eagerly loaded — it's always the first page
import Home from './pages/Home';
// All other pages are lazy-loaded (code split) — only downloaded when the user navigates there
const InvoicingGuide = lazy(() => import('./pages/InvoicingGuide'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const InvoiceGeneratorToolGuide = lazy(() => import('./pages/blog/InvoiceGeneratorToolGuide'));
import './pages/Pages.css';

// Simple page-load spinner shown while lazy chunks are downloading
function PageLoader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <div style={{ width: 36, height: 36, border: '3px solid #e5e7eb', borderTopColor: '#2563eb', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/invoicing-guide" element={<InvoicingGuide />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/blog/free-invoice-generator-tool" element={<InvoiceGeneratorToolGuide />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
