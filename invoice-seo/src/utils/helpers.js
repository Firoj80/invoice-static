import html2pdf from 'html2pdf.js';

export const generatePDF = async (elementId, filename = 'invoice') => {
    const element = document.getElementById(elementId);

    if (!element) {
        console.error('Element not found:', elementId);
        return;
    }

    const opt = {
        margin: [10, 10, 10, 10],
        filename: `${filename}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            letterRendering: true,
            logging: false
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        },
        pagebreak: { mode: 'avoid-all' }
    };

    // Dynamic height calculation for "stitched" PDF
    const elementHeight = element.offsetHeight;
    const elementWidth = element.offsetWidth;

    // Convert to mm (approx 1px = 0.264583mm)
    // Adding extra buffer for margins
    const marginBuffer = 20; // 10mm top + 10mm bottom
    const pixelToMm = 0.264583;
    const heightInMm = (elementHeight * pixelToMm) + marginBuffer;
    const widthInMm = (elementWidth * pixelToMm) + 20; // + margins

    // If height is greater than standard A4 (297mm), use custom format
    if (heightInMm > 297) {
        opt.jsPDF.format = [widthInMm, heightInMm];
    } else {
        opt.jsPDF.format = 'a4';
    }

    try {
        await html2pdf().set(opt).from(element).save();
        return true;
    } catch (error) {
        console.error('PDF generation failed:', error);
        return false;
    }
};

export const generateInvoiceNumber = () => {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `INV-${year}${month}-${random}`;
};

export const formatDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

export const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
};

export const getDefaultDueDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 30);
    return date.toISOString().split('T')[0];
};
