const InvoiceMeta = ({ data, updateField }) => {
    return (
        <div className="invoice-meta">
            <div className="form-row-3">
                <div className="form-group">
                    <label htmlFor="invoiceNumber">Invoice Number</label>
                    <input
                        id="invoiceNumber"
                        type="text"
                        placeholder="INV-001"
                        value={data.invoiceNumber}
                        onChange={(e) => updateField('invoiceNumber', e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="invoiceDate">Invoice Date</label>
                    <input
                        id="invoiceDate"
                        type="date"
                        value={data.invoiceDate}
                        onChange={(e) => updateField('invoiceDate', e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="dueDate">Due Date</label>
                    <input
                        id="dueDate"
                        type="date"
                        value={data.dueDate}
                        onChange={(e) => updateField('dueDate', e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default InvoiceMeta;
