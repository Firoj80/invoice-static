import { useState, useEffect, useMemo } from 'react';
import { Eye, Save, RotateCcw } from 'lucide-react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import InvoiceForm from '../components/InvoiceForm';
import InvoicePreview from '../components/InvoicePreview';
import PreviewModal from '../components/PreviewModal';
import Sidebar from '../components/Sidebar';
import SEOContent from '../components/SEOContent/SEOContent';
import Footer from '../components/Footer';
import { getCurrencySymbol } from '../data/currencies';
import { generatePDF, generateInvoiceNumber, getTodayDate, getDefaultDueDate } from '../utils/helpers';
import '../App.css';

const createInitialInvoiceData = () => ({
    // Business Details
    businessLogo: null,
    businessDetails: '',

    // Client Details
    clientDetails: '',

    // Invoice Meta
    invoiceNumber: generateInvoiceNumber(),
    paymentTerms: '',
    invoiceDate: getTodayDate(),
    dueDate: getDefaultDueDate(),

    // Line Items
    items: [
        { description: 'Item description', quantity: 1, rate: 0, discount: 0 }
    ],

    // Totals
    discountPercent: 0,
    taxPercent: 0,
    shipping: 0,

    // Currency
    currency: 'USD',

    // Payment Methods
    paymentMethods: {
        selected: 'bank',
        bank: { bankName: '', holderName: '', accountNumber: '', ifsc: '' },
        paypal: { email: '' },
        upi: { upiId: '' },
        link: { url: '' }
    },

    // Notes
    notes: '',
    terms: ''
});

const Home = () => {
    // Dark mode is now handled in App.jsx (global)

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

    // Calculate total for current invoice
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

    // Save current invoice data to localStorage
    useEffect(() => {
        localStorage.setItem('currentInvoice', JSON.stringify(invoiceData));
    }, [invoiceData]);

    // Save saved invoices to localStorage
    useEffect(() => {
        localStorage.setItem('savedInvoices', JSON.stringify(savedInvoices));
    }, [savedInvoices]);

    // Get currency symbol
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

    // Save Invoice and Download
    const handleSaveInvoice = async () => {
        // 1. Save logic
        const savedInvoice = {
            id: Date.now().toString(),
            ...invoiceData,
            total: invoiceTotal,
            savedAt: new Date().toISOString()
        };

        setSavedInvoices(prev => [savedInvoice, ...prev].slice(0, 20));

        // 2. Auto Download logic
        setIsGenerating(true);
        try {
            const filename = `invoice-${invoiceData.invoiceNumber || 'draft'}`;
            // We use a slight timeout to ensure state is clean if needed, though usually fine
            await generatePDF('invoice-preview', filename);
        } catch (error) {
            console.error('Error auto-downloading:', error);
        } finally {
            setIsGenerating(false);
        }

        // 3. Reset invoice number for next one (optional, user flow might prefer keeping data)
        // User probably expects the current invoice to just be "Saved". 
        // Usually "Save" implies keeping it. Resetting might be annoying if they want to edit it further?
        // But original code did reset. I'll keep the reset behavior but maybe after download?
        // Actually, if it downloads, we probably shouldn't clear the form immediately in case they saw a typo.
        // But the request says "Save invoice".
        // I will keep the reset for now as it was there? 
        // "setInvoiceData(prev => ({ ...prev, invoiceNumber: generateInvoiceNumber() }));"
        // I'll keep it to generate a NEW number for the *next* invoice, effectively "submitting" this one.

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
                <main className="main-content">
                    <div className="content-wrapper">
                        {/* Left Side: Form */}
                        <div className="form-container">
                            <InvoiceForm
                                invoiceData={invoiceData}
                                setInvoiceData={setInvoiceData}
                                currencySymbol={currencySymbol}
                            />

                            {/* Action Buttons */}
                            <div className="action-buttons">
                                <button className="btn-secondary" onClick={handleReset}>
                                    <RotateCcw size={18} />
                                    Reset
                                </button>
                                <div className="action-buttons-right">
                                    <button className="btn-secondary" onClick={handleSaveInvoice}>
                                        <Save size={18} />
                                        Save & Download
                                    </button>
                                    <button className="btn-primary btn-lg" onClick={() => setIsPreviewOpen(true)}>
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
