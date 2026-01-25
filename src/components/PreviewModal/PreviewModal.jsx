import { useEffect } from 'react';
import { X, Download, Loader2 } from 'lucide-react';
import './PreviewModal.css';

const PreviewModal = ({ isOpen, onClose, children, onDownload, isGenerating }) => {
    // Close on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>Invoice Preview</h3>
                    <div className="modal-actions">
                        <button
                            className="btn-primary"
                            onClick={onDownload}
                            disabled={isGenerating}
                        >
                            {isGenerating ? (
                                <>
                                    <Loader2 size={18} className="spinning" />
                                    Generating...
                                </>
                            ) : (
                                <>
                                    <Download size={18} />
                                    Download PDF
                                </>
                            )}
                        </button>
                        <button className="btn-ghost btn-icon" onClick={onClose} aria-label="Close">
                            <X size={24} />
                        </button>
                    </div>
                </div>
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default PreviewModal;
