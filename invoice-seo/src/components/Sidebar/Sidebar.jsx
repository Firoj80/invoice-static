import { FileText, Download, Trash2, Clock, ChevronRight, ChevronLeft, Youtube, ExternalLink } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ invoices, onSelect, onDelete, onDownload, isCollapsed, toggleCollapsed }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const formatCurrency = (amount, currency) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency || 'USD',
            minimumFractionDigits: 2
        }).format(amount);
    };

    if (isCollapsed) return null;

    return (
        <aside className="sidebar">
            {/* Scrollable content wrapper handled by CSS/Parent mostly, but class for styles */}
            <div className="sidebar-sticky-wrapper">
                {/* Recent Invoices Section */}
                <div className="sidebar-section">
                    <div className="sidebar-header">
                        <FileText size={18} className="text-blue" />
                        <h3>Recent Invoices</h3>
                    </div>

                    <div className="sidebar-content">
                        {invoices.length === 0 ? (
                            <div className="sidebar-empty">
                                <FileText size={48} strokeWidth={1} />
                                <p>No invoices yet</p>
                                <span>Your recent invoices will appear here</span>
                            </div>
                        ) : (
                            <ul className="invoice-list">
                                {invoices.map((invoice) => (
                                    <li key={invoice.id} className="invoice-item">
                                        <div className="invoice-item-content" onClick={() => onSelect(invoice)}>
                                            <div className="invoice-item-header">
                                                <span className="invoice-item-number">{invoice.invoiceNumber}</span>
                                                <span className="invoice-item-amount">
                                                    {formatCurrency(invoice.total, invoice.currency)}
                                                </span>
                                            </div>
                                            <div className="invoice-item-details">
                                                <span className="invoice-item-client">
                                                    {invoice.clientDetails?.split('\n')[0] || 'No client'}
                                                </span>
                                                <span className="invoice-item-date">
                                                    {formatDate(invoice.savedAt)}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="invoice-item-actions">
                                            <button
                                                className="btn-icon btn-ghost"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onDownload(invoice);
                                                }}
                                                title="Download PDF"
                                            >
                                                <Download size={16} />
                                            </button>
                                            <button
                                                className="btn-icon btn-ghost btn-delete"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onDelete(invoice.id);
                                                }}
                                                title="Delete"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

            </div>
        </aside>
    );
};

export default Sidebar;
