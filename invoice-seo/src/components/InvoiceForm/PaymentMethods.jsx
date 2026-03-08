import { Landmark, CreditCard, Smartphone, Link as LinkIcon, Banknote } from 'lucide-react';
import './PaymentMethods.css';

const PaymentMethods = ({ paymentMethods, setPaymentMethods }) => {
    const selected = paymentMethods.selected || 'bank';

    const handleMethodChange = (method) => {
        setPaymentMethods({ ...paymentMethods, selected: method });
    };

    const updateDetails = (method, field, value) => {
        setPaymentMethods({
            ...paymentMethods,
            [method]: { ...paymentMethods[method], [field]: value }
        });
    };

    return (
        <div className="payment-methods-container">
            <div className="payment-selector">
                <h4>How does this invoice get paid?</h4>
                <div className="payment-options">
                    <label className={`payment-option ${selected === 'bank' ? 'active' : ''}`}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            checked={selected === 'bank'}
                            onChange={() => handleMethodChange('bank')}
                        />
                        <Landmark size={18} />
                        <span>Bank Transfer</span>
                    </label>

                    <label className={`payment-option ${selected === 'paypal' ? 'active' : ''}`}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            checked={selected === 'paypal'}
                            onChange={() => handleMethodChange('paypal')}
                        />
                        <CreditCard size={18} />
                        <span>PayPal</span>
                    </label>

                    <label className={`payment-option ${selected === 'upi' ? 'active' : ''}`}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            checked={selected === 'upi'}
                            onChange={() => handleMethodChange('upi')}
                        />
                        <Smartphone size={18} />
                        <span>UPI</span>
                    </label>

                    <label className={`payment-option ${selected === 'link' ? 'active' : ''}`}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            checked={selected === 'link'}
                            onChange={() => handleMethodChange('link')}
                        />
                        <LinkIcon size={18} />
                        <span>Payment Link</span>
                    </label>

                    <label className={`payment-option ${selected === 'cash' ? 'active' : ''}`}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            checked={selected === 'cash'}
                            onChange={() => handleMethodChange('cash')}
                        />
                        <Banknote size={18} />
                        <span>Cash</span>
                    </label>
                </div>
            </div>

            <div className="payment-details-panel">
                {selected === 'bank' && (
                    <div className="details-form fade-in">
                        <div className="details-header">
                            <span className="info-icon">i</span>
                            <h4>Enter bank details</h4>
                        </div>
                        <textarea
                            className="payment-textarea"
                            placeholder="Bank Name,&#10;Account Holder Name,&#10;Account Number,&#10;Account Type,&#10;IFSC/SWIFT Code,&#10;IBAN, etc..."
                            rows={6}
                            value={
                                paymentMethods.bank.bankDetails ||
                                [
                                    paymentMethods.bank.bankName,
                                    paymentMethods.bank.holderName,
                                    paymentMethods.bank.accountNumber,
                                    paymentMethods.bank.ifsc
                                ].filter(Boolean).join('\n')
                            }
                            onChange={(e) => updateDetails('bank', 'bankDetails', e.target.value)}
                        />
                    </div>
                )}

                {selected === 'paypal' && (
                    <div className="details-form fade-in">
                        <label>PayPal Email</label>
                        <input
                            type="email"
                            placeholder="yourname@email.com"
                            value={paymentMethods.paypal.email}
                            onChange={(e) => updateDetails('paypal', 'email', e.target.value)}
                        />
                    </div>
                )}

                {selected === 'upi' && (
                    <div className="details-form fade-in">
                        <label>UPI ID</label>
                        <input
                            type="text"
                            placeholder="username@upi"
                            value={paymentMethods.upi.upiId}
                            onChange={(e) => updateDetails('upi', 'upiId', e.target.value)}
                        />
                    </div>
                )}

                {selected === 'link' && (
                    <div className="details-form fade-in">
                        <label>Payment Link</label>
                        <input
                            type="url"
                            placeholder="https://payment.link/..."
                            value={paymentMethods.link.url}
                            onChange={(e) => updateDetails('link', 'url', e.target.value)}
                        />
                    </div>
                )}

                {selected === 'cash' && (
                    <div className="details-form fade-in placeholder-msg">
                        <p>This invoice is set to be paid by Cash.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PaymentMethods;
