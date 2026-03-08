import { Trash2, Plus } from 'lucide-react';
import './LineItemsTable.css';

const LineItemsTable = ({ items, setItems, currencySymbol }) => {
    const addItem = () => {
        setItems([...items, { description: '', quantity: 1, rate: 0, discount: 0 }]);
    };

    const removeItem = (index) => {
        if (items.length > 1) {
            setItems(items.filter((_, i) => i !== index));
        }
    };

    const updateItem = (index, field, value) => {
        const newItems = [...items];
        newItems[index] = { ...newItems[index], [field]: value };
        setItems(newItems);
    };

    const calculateItemAmount = (item) => {
        const subtotal = item.quantity * item.rate;
        const discountAmount = (subtotal * item.discount) / 100;
        return subtotal - discountAmount;
    };

    return (
        <div className="line-items-wrapper">
            <div className="items-header">
                <label className="col-desc">Item Description</label>
                <label className="col-qty">Qty</label>
                <label className="col-rate">Rate</label>
                <label className="col-disc">Discount</label>
                <label className="col-amount">Amount</label>
            </div>

            <div className="items-list">
                {items.map((item, index) => (
                    <div key={index} className="item-row fade-in">
                        <input
                            type="text"
                            className="input-desc"
                            placeholder="Item description"
                            value={item.description}
                            onChange={(e) => updateItem(index, 'description', e.target.value)}
                        />
                        <input
                            type="number"
                            className="input-qty"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateItem(index, 'quantity', parseFloat(e.target.value) || 0)}
                        />
                        <input
                            type="number"
                            className="input-rate"
                            min="0"
                            step="0.01"
                            value={item.rate}
                            onChange={(e) => updateItem(index, 'rate', parseFloat(e.target.value) || 0)}
                        />
                        <div className="input-disc-group">
                            <input
                                type="number"
                                min="0"
                                max="100"
                                value={item.discount}
                                onChange={(e) => updateItem(index, 'discount', parseFloat(e.target.value) || 0)}
                            />
                            <span className="unit">%</span>
                        </div>
                        <div className="amount-display">
                            {currencySymbol}{calculateItemAmount(item).toFixed(2)}
                        </div>
                        <button
                            type="button"
                            className="delete-item-btn"
                            onClick={() => removeItem(index)}
                            title="Remove Item"
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>
                ))}
            </div>

            <button type="button" className="add-item-link" onClick={addItem}>
                <Plus size={16} />
                Add Item
            </button>
        </div>
    );
};

export default LineItemsTable;
