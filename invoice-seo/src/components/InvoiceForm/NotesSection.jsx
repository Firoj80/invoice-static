const NotesSection = ({ data, updateField }) => {
    return (
        <div className="notes-section">
            <div className="form-group">
                <label htmlFor="notes">Notes</label>
                <textarea
                    id="notes"
                    placeholder="Any additional notes for the client (optional)"
                    rows={3}
                    value={data.notes}
                    onChange={(e) => updateField('notes', e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="terms">Terms & Conditions</label>
                <textarea
                    id="terms"
                    placeholder="Payment terms, late fees, refund policy, etc."
                    rows={3}
                    value={data.terms}
                    onChange={(e) => updateField('terms', e.target.value)}
                />
            </div>
        </div>
    );
};

export default NotesSection;
