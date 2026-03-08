import { useState, useEffect, useMemo } from 'react';
import { Eye, Save, RotateCcw } from 'lucide-react';
import HeroSection from '../components/HeroSection/HeroSection';
import InvoiceForm from '../components/InvoiceForm';
import InvoicePreview from '../components/InvoicePreview';
import PreviewModal from '../components/PreviewModal';
import Sidebar from '../components/Sidebar';
import SEOContent from '../components/SEOContent/SEOContent';
import { getCurrencySymbol } from '../data/currencies';
import { generatePDF, generateInvoiceNumber, getTodayDate, getDefaultDueDate } from '../utils/helpers';
import useSEO from '../hooks/useSEO';
import '../App.css';

const createInitialInvoiceData = () => ({
    businessLogo: null,
    businessDetails: '',
    clientDetails: '',
    invoiceNumber: generateInvoiceNumber(),
    paymentTerms: '',
    invoiceDate: getTodayDate(),
    dueDate: getDefaultDueDate(),
    items: [
        { description: 'Item description', quantity: 1, rate: 0, discount: 0 }
    ],
    discountPercent: 0,
    taxPercent: 0,
    shipping: 0,
    currency: 'USD',
    paymentMethods: {
        selected: 'bank',
        bank: { bankName: '', holderName: '', accountNumber: '', ifsc: '' },
        paypal: { email: '' },
        upi: { upiId: '' },
        link: { url: '' }
    },
    notes: '',
    terms: ''
});

const Home = () => {
    // ✅ SEO: per-page meta tags
    useSEO({
        title: 'Free AI Invoice Generator for Freelancers & Small Businesses — ClearBill AI',
        description: 'Create professional invoices in seconds with ClearBill AI — the free online invoice generator. No signup required. Auto-calculate taxes, export to PDF, multi-currency support.',
        canonical: 'https://www.clearbillai.com/',
    });

    const [invoiceData, setInvoiceData] = useState(() => {
        const saved = localStorage.getItem('currentInvoice');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                return { ...createInitialInvoiceData(), ...parsed };
            } catch (e) {
                return createInitialInvoiceData();
            }
        }
        return createInitialInvoiceData();
    });

    const [savedInvoices, setSavedInvoices] = useState(() => {
        const saved = localStorage.getItem('savedInvoices');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                return [];
            }
        }
        return [];
    });

    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const invoiceTotal = useMemo(() => {
        const subtotal = invoiceData.items.reduce((sum, item) => {
            const itemSubtotal = item.quantity * item.rate;
            const itemDiscount = (itemSubtotal * item.discount) / 100;
            return sum + (itemSubtotal - itemDiscount);
        }, 0);
        const discountAmount = (subtotal * invoiceData.discountPercent) / 100;
        const afterDiscount = subtotal - discountAmount;
        const taxAmount = (afterDiscount * invoiceData.taxPercent) / 100;
        return afterDiscount + taxAmount + (parseFloat(invoiceData.shipping) || 0);
    }, [invoiceData]);

    useEffect(() => {
        localStorage.setItem('currentInvoice', JSON.stringify(invoiceData));
    }, [invoiceData]);

    useEffect(() => {
        localStorage.setItem('savedInvoices', JSON.stringify(savedInvoices));
    }, [savedInvoices]);

    const currencySymbol = getCurrencySymbol(invoiceData.currency);

    const handleDownload = async () => {
        setIsGenerating(true);
        try {
            const filename = `invoice-${invoiceData.invoiceNumber || 'draft'}`;
            await generatePDF('invoice-preview', filename);
        } catch (error) {
            console.error('Error generating PDF:', error);
        } finally {
            setIsGenerating(false);
        }
    };

    const handleSaveInvoice = async () => {
        const savedInvoice = {
            id: Date.now().toString(),
            ...invoiceData,
            total: invoiceTotal,
            savedAt: new Date().toISOString()
        };
        setSavedInvoices(prev => [savedInvoice, ...prev].slice(0, 20));
        setIsGenerating(true);
        try {
            const filename = `invoice-${invoiceData.invoiceNumber || 'draft'}`;
            await generatePDF('invoice-preview', filename);
        } catch (error) {
            console.error('Error auto-downloading:', error);
        } finally {
            setIsGenerating(false);
        }
        setInvoiceData(prev => ({
            ...prev,
            invoiceNumber: generateInvoiceNumber()
        }));
    };

    const handleSelectInvoice = (invoice) => {
        const { id, savedAt, total, ...invoiceFields } = invoice;
        setInvoiceData(invoiceFields);
    };

    const handleDeleteInvoice = (id) => {
        setSavedInvoices(prev => prev.filter(inv => inv.id !== id));
    };

    const handleDownloadFromHistory = async (invoice) => {
        const { id, savedAt, total, ...invoiceFields } = invoice;
        setInvoiceData(invoiceFields);
        setIsPreviewOpen(true);
        setTimeout(async () => {
            setIsGenerating(true);
            try {
                const filename = `invoice-${invoice.invoiceNumber || 'draft'}`;
                await generatePDF('invoice-preview', filename);
            } catch (error) {
                console.error('Error generating PDF:', error);
            } finally {
                setIsGenerating(false);
            }
        }, 500);
    };

    const handleReset = () => {
        if (confirm('Are you sure you want to reset the invoice? This will clear all data.')) {
            setInvoiceData(createInitialInvoiceData());
        }
    };

    return (
        <>
            <HeroSection />
            <div className="app-body" id="invoice-builder">
                <main className="main-content" role="main">
                    <div className="content-wrapper">
                        {/* Left Side: Form */}
                        <div className="form-container">
                            <InvoiceForm
                                invoiceData={invoiceData}
                                setInvoiceData={setInvoiceData}
                                currencySymbol={currencySymbol}
                            />
                            <div className="action-buttons">
                                <button className="btn-secondary" onClick={handleReset} aria-label="Reset invoice form">
                                    <RotateCcw size={18} />
                                    Reset
                                </button>
                                <div className="action-buttons-right">
                                    <button className="btn-secondary" onClick={handleSaveInvoice} aria-label="Save and download invoice as PDF">
                                        <Save size={18} />
                                        Save & Download
                                    </button>
                                    <button className="btn-primary btn-lg" onClick={() => setIsPreviewOpen(true)} aria-label="Preview invoice">
                                        <Eye size={20} />
                                        Preview
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Sidebar */}
                        <div className="sidebar-container">
                            <Sidebar
                                invoices={savedInvoices}
                                onSelect={handleSelectInvoice}
                                onDelete={handleDeleteInvoice}
                                onDownload={handleDownloadFromHistory}
                                isCollapsed={isSidebarCollapsed}
                                toggleCollapsed={() => setIsSidebarCollapsed(prev => !prev)}
                            />
                        </div>
                    </div>
                </main>
            </div>

            {/* ✅ SEO crawlable content section */}
            <SEOContent />

            {/* Preview Modal */}
            <PreviewModal
                isOpen={isPreviewOpen}
                onClose={() => setIsPreviewOpen(false)}
                onDownload={handleDownload}
                isGenerating={isGenerating}
            >
                <InvoicePreview
                    invoiceData={invoiceData}
                    currencySymbol={currencySymbol}
                />
            </PreviewModal>
        </>
    );
};

export default Home;
