const ClientDetails = ({ data, updateField }) => {
    return (
        <div className="client-details">
            <div className="form-group">
                <label htmlFor="clientName">Client Name</label>
                <input
                    id="clientName"
                    type="text"
                    placeholder="Client or Company Name"
                    value={data.clientName}
                    onChange={(e) => updateField('clientName', e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="clientAddress">Client Address</label>
                <textarea
                    id="clientAddress"
                    placeholder="Client's full address"
                    rows={3}
                    value={data.clientAddress}
                    onChange={(e) => updateField('clientAddress', e.target.value)}
                />
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="clientEmail">Email</label>
                    <input
                        id="clientEmail"
                        type="email"
                        placeholder="client@email.com"
                        value={data.clientEmail}
                        onChange={(e) => updateField('clientEmail', e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="clientPhone">Phone</label>
                    <input
                        id="clientPhone"
                        type="tel"
                        placeholder="+1 234 567 8900"
                        value={data.clientPhone}
                        onChange={(e) => updateField('clientPhone', e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default ClientDetails;
