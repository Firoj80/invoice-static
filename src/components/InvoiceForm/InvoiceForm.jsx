import { useState, useRef } from 'react';
import { Upload, Calendar, ChevronDown } from 'lucide-react';
import LineItemsTable from './LineItemsTable';
import TotalsSection from './TotalsSection';
import PaymentMethods from './PaymentMethods';
import './InvoiceForm.css';
import { currencies } from '../../data/currencies';

const InvoiceForm = ({ invoiceData, setInvoiceData, currencySymbol }) => {
    const fileInputRef = useRef(null);

    const updateField = (field, value) => {
        // Auto-calculate Due Date based on Payment Terms
        if (field === 'paymentTerms') {
            let daysToAdd = 0;
            if (value === 'due_receipt') daysToAdd = 0;
            else if (value.startsWith('net_')) {
                daysToAdd = parseInt(value.split('_')[1], 10);
            }

            if (value && (value === 'due_receipt' || value.startsWith('net_'))) {
                const startDate = new Date(invoiceData.invoiceDate || new Date());
                startDate.setDate(startDate.getDate() + daysToAdd);
                const newDueDate = startDate.toISOString().split('T')[0];

                setInvoiceData(prev => ({
                    ...prev,
                    [field]: value,
                    dueDate: newDueDate
                }));
                return;
            }
        }

        setInvoiceData(prev => ({ ...prev, [field]: value }));
    };

    const handleLogoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                updateField('businessLogo', reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="invoice-form-container">
            <div className="form-header">
                <h2>Create New Invoice</h2>
            </div>

            {/* Top Section: Logo & Meta */}
            <div className="form-section top-section">
                <div className="logo-section">
                    <label>Invoice Details</label>
                    <div className="logo-upload-box" onClick={() => fileInputRef.current?.click()}>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/png, image/jpeg, image/svg+xml"
                            hidden
                            onChange={handleLogoUpload}
                        />
                        {invoiceData.businessLogo ? (
                            <img src={invoiceData.businessLogo} alt="Logo" className="uploaded-logo" />
                        ) : (
                            <div className="upload-placeholder">
                                <div className="plus-icon">+</div>
                                <span className="upload-text">Upload logo</span>
                                <span className="upload-info">Supported formats: JPG, PNG, SVG</span>
                                <span className="upload-info">Recommended size: 500px × 500px</span>
                                <button type="button" className="upload-btn">Upload</button>
                            </div>
                        )}
                    </div>
                    <p className="max-size-text">Max upload size: 1 MB</p>
                </div>

                <div className="meta-section">
                    <div className="form-row">
                        <div className="form-group">
                            <label>Invoice Number</label>
                            <input
                                type="text"
                                value={invoiceData.invoiceNumber}
                                onChange={(e) => updateField('invoiceNumber', e.target.value)}
                                placeholder="INV-001"
                            />
                        </div>
                        <div className="form-group">
                            <label>Payment Terms</label>
                            <select
                                value={invoiceData.paymentTerms || ''}
                                onChange={(e) => updateField('paymentTerms', e.target.value)}
                            >
                                <option value="">Select Terms</option>
                                <option value="due_receipt">Due on Receipt</option>
                                <option value="net_7">Net 7</option>
                                <option value="net_15">Net 15</option>
                                <option value="net_30">Net 30</option>
                                <option value="net_45">Net 45</option>
                                <option value="net_60">Net 60</option>
                                <option value="net_90">Net 90</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Issue Date</label>
                            <div className="date-input-wrapper">
                                <input
                                    type="date"
                                    value={invoiceData.invoiceDate}
                                    onChange={(e) => updateField('invoiceDate', e.target.value)}
                                />
                                <Calendar size={16} className="calendar-icon" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Due Date</label>
                            <div className="date-input-wrapper">
                                <input
                                    type="date"
                                    value={invoiceData.dueDate}
                                    onChange={(e) => updateField('dueDate', e.target.value)}
                                />
                                <Calendar size={16} className="calendar-icon" />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Currency</label>
                        <div className="currency-select-wrapper">
                            <select
                                value={invoiceData.currency}
                                onChange={(e) => updateField('currency', e.target.value)}
                            >
                                {currencies.map(c => (
                                    <option key={c.code} value={c.code}>{c.code} ({c.symbol})</option>
                                ))}
                            </select>
                            <ChevronDown size={16} className="select-arrow" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Address Section */}
            <div className="form-section address-section">
                <div className="form-group">
                    <label>Invoice From</label>
                    <span className="sub-label">Your Business Details</span>
                    <textarea
                        className="address-textarea"
                        placeholder="Business Name,&#10;Address,&#10;Phone,&#10;Email,&#10;TAX ID, etc."
                        value={invoiceData.businessDetails}
                        onChange={(e) => updateField('businessDetails', e.target.value)}
                        rows={5}
                    />
                </div>
                <div className="form-group">
                    <label>Bill To</label>
                    <span className="sub-label">Client Details</span>
                    <textarea
                        className="address-textarea"
                        placeholder="Client/Business Name,&#10;Address,&#10;Phone,&#10;Email,&#10;TAX ID, etc."
                        value={invoiceData.clientDetails}
                        onChange={(e) => updateField('clientDetails', e.target.value)}
                        rows={5}
                    />
                </div>
            </div>

            {/* Items Section */}
            <div className="form-section items-section">
                <h3>Items</h3>
                <LineItemsTable
                    items={invoiceData.items}
                    setItems={(items) => updateField('items', items)}
                    currencySymbol={currencySymbol}
                />
                <TotalsSection
                    invoiceData={invoiceData}
                    updateField={updateField}
                    currencySymbol={currencySymbol}
                />
            </div>

            {/* Items & Pay & Notes Grid */}
            <div className="form-section bottom-grid">
                {/* Payment Methods */}
                <div className="payment-config-section">
                    <PaymentMethods
                        paymentMethods={invoiceData.paymentMethods}
                        setPaymentMethods={(methods) => updateField('paymentMethods', methods)}
                        invoiceData={invoiceData}
                        updateField={updateField}
                    />
                </div>
            </div>

            {/* Notes & Terms */}
            <div className="form-section notes-terms-section">
                <div className="form-group">
                    <label>Notes</label>
                    <textarea
                        placeholder="Notes to be displayed on the invoice"
                        value={invoiceData.notes}
                        onChange={(e) => updateField('notes', e.target.value)}
                        rows={4}
                    />
                </div>
                <div className="form-group">
                    <label>Terms</label>
                    <textarea
                        placeholder="Terms and conditions for this invoice"
                        value={invoiceData.terms}
                        onChange={(e) => updateField('terms', e.target.value)}
                        rows={4}
                    />
                </div>
            </div>

        </div>
    );
};

export default InvoiceForm;
