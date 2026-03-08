import useSEO from '../hooks/useSEO';

const InvoicingGuide = () => {
    // ✅ SEO: unique title + description for this page
    useSEO({
        title: 'Invoicing Guide for Freelancers & Small Businesses — ClearBill AI',
        description: 'Step-by-step invoicing guide: how to create professional invoices, what to include, best practices for getting paid on time, and how to use ClearBill AI.',
        canonical: 'https://www.clearbillai.com/invoicing-guide',
    });

    return (
        <article className="static-page-content">
            {/* ✅ SEO: H1 with target keyword */}
            <h1>Invoicing Guide: How to Create Professional Invoices</h1>
            <p>
                Creating professional invoices is essential for maintaining good business relationships
                and ensuring timely payments. Follow this comprehensive guide to create effective invoices
                with <strong>ClearBill AI</strong> — the free online invoice generator for freelancers and small businesses.
            </p>

            <section>
                <h2>Step 1: Fill in Invoice Details</h2>
                <p>Start by filling in the basic invoice information. This includes:</p>
                <ul>
                    <li><strong>Invoice number:</strong> automatically generated (e.g., INV-001)</li>
                    <li><strong>Issue date:</strong> today's date by default</li>
                    <li><strong>Due date:</strong> based on your payment terms (e.g., Net 30)</li>
                    <li><strong>Currency:</strong> select from 30+ global currencies</li>
                </ul>
            </section>

            <section>
                <h2>Step 2: Add Your Business & Client Details</h2>
                <p>Clearly identify both parties involved in the transaction:</p>
                <ul>
                    <li><strong>Your business details:</strong> name, address, phone, and email</li>
                    <li><strong>Client information:</strong> company name, address, and contact person</li>
                    <li><strong>Business logo:</strong> upload your logo for branded invoices</li>
                    <li>Include tax registration numbers (GST, VAT) if applicable</li>
                </ul>
            </section>

            <section>
                <h2>Step 3: Itemize Your Products or Services</h2>
                <p>A clear, itemized list helps clients understand exactly what they're paying for:</p>
                <ul>
                    <li>Enter a detailed description for each product or service</li>
                    <li>Specify quantity, price per unit, and any item-level discount</li>
                    <li>Add as many line items as needed</li>
                    <li>Subtotal, tax, and total are calculated automatically</li>
                </ul>
            </section>

            <section>
                <h2>Step 4: Specify Payment Details</h2>
                <p>Make it easy for clients to pay you by including clear payment instructions:</p>
                <ul>
                    <li>Select a payment method: Bank Transfer, PayPal, UPI, or custom link</li>
                    <li>Enter the relevant account or payment details</li>
                    <li>Add any special payment instructions if necessary</li>
                    <li>Include your payment terms and late payment policy</li>
                </ul>
            </section>

            <section>
                <h2>Step 5: Add Notes and Terms</h2>
                <p>Use the notes section to personalize and protect your invoice:</p>
                <ul>
                    <li>Thank your client for their business</li>
                    <li>Include notes about the services provided</li>
                    <li>Specify your terms and conditions</li>
                    <li>Add any disclaimers, warranties, or legal notices</li>
                </ul>
            </section>

            <section>
                <h2>Step 6: Generate, Download & Send</h2>
                <p>Finalize your invoice and deliver it to your client:</p>
                <ul>
                    <li>Review all information carefully for accuracy</li>
                    <li>Click "Preview" to check how the invoice looks</li>
                    <li>Click "Save &amp; Download" to generate and save a PDF</li>
                    <li>Email the PDF invoice to your client</li>
                    <li>Save a copy for your own records</li>
                </ul>
            </section>

            <section>
                <h2>Best Practices for Professional Invoicing</h2>
                <p>Follow these tips to improve your payment rate and maintain a professional image:</p>
                <ul>
                    <li>Send invoices promptly — immediately after delivering goods or services</li>
                    <li>Use clear, professional language throughout the invoice</li>
                    <li>Make your payment terms clearly visible near the total</li>
                    <li>Follow up with polite reminders before and after the due date</li>
                    <li>Use a consistent invoice numbering system for easy tracking</li>
                    <li>Archive copies of all invoices for tax and accounting purposes</li>
                    <li>Brand your invoices with your logo and consistent colors</li>
                    <li>Include a friendly thank-you note to build positive client relationships</li>
                </ul>
                <p>
                    <strong>Remember:</strong> A well-designed, professional invoice not only helps you
                    get paid faster but also reinforces your brand and credibility with every client.
                </p>
            </section>

            <section>
                <h2>Understanding Common Payment Terms</h2>
                <ul>
                    <li><strong>Net 15 / Net 30 / Net 60:</strong> Payment is due within 15, 30, or 60 days of the invoice date.</li>
                    <li><strong>Due on Receipt:</strong> Payment is expected immediately upon receiving the invoice.</li>
                    <li><strong>2/10 Net 30:</strong> A 2% discount if paid within 10 days; full amount due in 30 days.</li>
                    <li><strong>COD (Cash on Delivery):</strong> Payment required at the time of delivery.</li>
                </ul>
            </section>
        </article>
    );
};

export default InvoicingGuide;
