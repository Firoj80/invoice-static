import { useMemo } from 'react';
import { formatDate } from '../../utils/helpers';
import './InvoicePreview.css';

const InvoicePreview = ({ invoiceData, currencySymbol }) => {
    const {
        businessLogo, businessDetails,
        clientDetails,
        invoiceNumber, paymentTerms, invoiceDate, dueDate,
        items, discountPercent, taxPercent, shipping,
        paymentMethods, notes, terms
    } = invoiceData;

    const calculations = useMemo(() => {
        const subtotal = items.reduce((sum, item) => {
            const itemSubtotal = item.quantity * item.rate;
            const itemDiscount = (itemSubtotal * item.discount) / 100;
            return sum + (itemSubtotal - itemDiscount);
        }, 0);

        const discountAmount = (subtotal * discountPercent) / 100;
        const afterDiscount = subtotal - discountAmount;
        const taxAmount = (afterDiscount * taxPercent) / 100;
        const total = afterDiscount + taxAmount + (parseFloat(shipping) || 0);

        return { subtotal, discountAmount, taxAmount, total };
    }, [items, discountPercent, taxPercent, shipping]);

    // Determine selected payment method details
    const selectedMethod = paymentMethods.selected;
    let paymentDetailsContent = null;
    let paymentLabel = '';

    switch (selectedMethod) {
        case 'bank':
            paymentLabel = 'Bank Transfer';
            const bank = paymentMethods.bank;
            paymentDetailsContent = (
                <div className="payment-content">
                    {bank.bankDetails ? (
                        <p className="pre-wrap">{bank.bankDetails}</p>
                    ) : (
                        <>
                            {bank.bankName && <p>Bank: {bank.bankName}</p>}
                            {bank.holderName && <p>Name: {bank.holderName}</p>}
                            {bank.accountNumber && <p>abc: {bank.accountNumber}</p>}
                            {bank.ifsc && <p>IFSC: {bank.ifsc}</p>}
                        </>
                    )}
                </div>
            );
            break;
        case 'paypal':
            paymentLabel = 'PayPal';
            paymentDetailsContent = <p>{paymentMethods.paypal.email}</p>;
            break;
        case 'upi':
            paymentLabel = 'UPI';
            paymentDetailsContent = <p>{paymentMethods.upi.upiId}</p>;
            break;
        case 'link':
            paymentLabel = 'Payment Link';
            paymentDetailsContent = <p>{paymentMethods.link.url}</p>;
            break;
        case 'cash':
            paymentLabel = 'Cash';
            paymentDetailsContent = <p>Cash Payment</p>;
            break;
        default:
            break;
    }

    return (
        <div id="invoice-preview" className="invoice-document">
            {/* Header */}
            <div className="invoice-header">
                <div className="invoice-branding">
                    {businessLogo && (
                        <img src={businessLogo} alt="Business logo" className="invoice-logo" />
                    )}
                    <div className="invoice-title">
                        <h1>INVOICE</h1>
                        <p className="invoice-number">{invoiceNumber || 'INV-000'}</p>
                    </div>
                </div>
            </div>

            {/* Dates & Terms Bar */}
            <div className="invoice-meta-bar">
                <div className="meta-item">
                    <span className="meta-label">Date</span>
                    <span className="meta-value">{formatDate(invoiceDate)}</span>
                </div>
                <div className="meta-item">
                    <span className="meta-label">Payment Terms</span>
                    <span className="meta-value">{paymentTerms ? paymentTerms.replace('_', ' ').toUpperCase() : '-'}</span>
                </div>
                <div className="meta-item">
                    <span className="meta-label">Due Date</span>
                    <span className="meta-value">{formatDate(dueDate)}</span>
                </div>
            </div>

            {/* Business & Client Info */}
            <div className="invoice-parties">
                <div className="party from">
                    <h4>From</h4>
                    <p className="pre-wrap">{businessDetails || 'Your Business Details'}</p>
                </div>
                <div className="party to">
                    <h4>Bill To</h4>
                    <p className="pre-wrap">{clientDetails || 'Client Details'}</p>
                </div>
            </div>

            {/* Items Table */}
            <table className="invoice-items-table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th className="text-center">Qty</th>
                        <th className="text-right">Rate</th>
                        <th className="text-center">Disc</th>
                        <th className="text-right">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => {
                        const itemSubtotal = item.quantity * item.rate;
                        const itemDiscount = (itemSubtotal * item.discount) / 100;
                        const itemTotal = itemSubtotal - itemDiscount;
                        return (
                            <tr key={index}>
                                <td>{item.description || '-'}</td>
                                <td className="text-center">{item.quantity}</td>
                                <td className="text-right">{currencySymbol}{item.rate.toFixed(2)}</td>
                                <td className="text-center">{item.discount > 0 ? `${item.discount}%` : '-'}</td>
                                <td className="text-right">{currencySymbol}{itemTotal.toFixed(2)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {/* Totals */}
            <div className="invoice-totals">
                <div className="totals-row">
                    <span>Subtotal</span>
                    <span>{currencySymbol}{calculations.subtotal.toFixed(2)}</span>
                </div>
                {discountPercent > 0 && (
                    <div className="totals-row discount">
                        <span>Discount ({discountPercent}%)</span>
                        <span>-{currencySymbol}{calculations.discountAmount.toFixed(2)}</span>
                    </div>
                )}
                {taxPercent > 0 && (
                    <div className="totals-row">
                        <span>Tax ({taxPercent}%)</span>
                        <span>+{currencySymbol}{calculations.taxAmount.toFixed(2)}</span>
                    </div>
                )}
                {parseFloat(shipping) > 0 && (
                    <div className="totals-row">
                        <span>Shipping</span>
                        <span>+{currencySymbol}{parseFloat(shipping).toFixed(2)}</span>
                    </div>
                )}
                <div className="totals-row grand-total">
                    <span>Total Due</span>
                    <span>{currencySymbol}{calculations.total.toFixed(2)}</span>
                </div>
            </div>

            {/* Payment Methods */}
            {selectedMethod && (
                <div className="invoice-payment">
                    <h4>Payment Info</h4>
                    <div className="payment-details">
                        <strong>{paymentLabel}</strong>
                        {paymentDetailsContent}
                    </div>
                </div>
            )}

            {/* Notes & Terms */}
            {(notes || terms) && (
                <div className="invoice-footer">
                    {notes && (
                        <div className="footer-section">
                            <h4>Notes</h4>
                            <p>{notes}</p>
                        </div>
                    )}
                    {terms && (
                        <div className="footer-section">
                            <h4>Terms & Conditions</h4>
                            <p>{terms}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default InvoicePreview;
