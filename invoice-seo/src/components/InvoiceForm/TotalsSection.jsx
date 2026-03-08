import { useMemo } from 'react';
import './TotalsSection.css';

const TotalsSection = ({ invoiceData, updateField, currencySymbol }) => {
    const { items, discountPercent, taxPercent, shipping } = invoiceData;

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

    return (
        <div className="totals-container">
            <div className="total-row">
                <label>Subtotal:</label>
                <span className="amount-value">{currencySymbol}{calculations.subtotal.toFixed(2)}</span>
            </div>

            <div className="total-row">
                <label>Discount:</label>
                <div className="input-group">
                    <input
                        type="number"
                        min="0"
                        max="100"
                        value={discountPercent}
                        onChange={(e) => updateField('discountPercent', parseFloat(e.target.value) || 0)}
                    />
                    <span className="unit">%</span>
                </div>
            </div>

            <div className="total-row">
                <label>Tax:</label>
                <div className="input-group">
                    <input
                        type="number"
                        min="0"
                        max="100"
                        value={taxPercent}
                        onChange={(e) => updateField('taxPercent', parseFloat(e.target.value) || 0)}
                    />
                    <span className="unit">%</span>
                </div>
            </div>

            <div className="total-row">
                <label>Shipping:</label>
                <div className="input-group">
                    <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={shipping}
                        onChange={(e) => updateField('shipping', parseFloat(e.target.value) || 0)}
                    />
                </div>
            </div>

            <div className="total-row final-total">
                <label>Total:</label>
                <span className="amount-value total-blue">{currencySymbol}{calculations.total.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default TotalsSection;
