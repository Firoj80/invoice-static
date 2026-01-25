const InvoicingGuide = () => {
    return (
        <div className="static-page-content">
            <h1>Invoicing Guide</h1>
            <p>Creating professional invoices is essential for maintaining good business relationships and ensuring timely payments. Follow our comprehensive guide to create effective invoices with <strong>ClearBillAI</strong>.</p>

            <section>
                <h2>Step 1: Invoice Details</h2>
                <p>Start by filling in the basic invoice information. This includes:</p>
                <ul>
                    <li><strong>Invoice number:</strong> automatically generated</li>
                    <li><strong>Issue date:</strong> today's date by default</li>
                    <li><strong>Due date:</strong> based on payment terms</li>
                    <li><strong>Currency:</strong> select from dropdown</li>
                </ul>
            </section>

            <section>
                <h2>Step 2: From & To Details</h2>
                <p>Clearly identify both parties involved in the transaction:</p>
                <ul>
                    <li><strong>Your business details:</strong> name, address, contact info</li>
                    <li><strong>Client information:</strong> name, address, contact person</li>
                    <li><strong>Optional:</strong> Add your business logo</li>
                    <li>Include any tax registration numbers if applicable</li>
                </ul>
            </section>

            <section>
                <h2>Step 3: Invoice Items</h2>
                <p>Itemize the products or services you're billing for:</p>
                <ul>
                    <li>Enter detailed descriptions for each item</li>
                    <li>Specify quantity, price per unit, and discount (if any)</li>
                    <li>Add as many items as needed</li>
                    <li>The subtotal, tax, and total will calculate automatically</li>
                </ul>
            </section>

            <section>
                <h2>Step 4: Payment Details</h2>
                <p>Specify how you'd like to be paid:</p>
                <ul>
                    <li>Select a payment method (Bank Transfer, PayPal, UPI, etc.)</li>
                    <li>Enter the relevant payment details for your chosen method</li>
                    <li>Add special payment instructions if necessary</li>
                    <li>Include payment terms and late payment policies</li>
                </ul>
            </section>

            <section>
                <h2>Step 5: Notes & Terms</h2>
                <p>Add any additional information that may be helpful:</p>
                <ul>
                    <li>Thank your client for their business</li>
                    <li>Include notes about the services provided</li>
                    <li>Specify your terms and conditions</li>
                    <li>Add any disclaimers or legal notices</li>
                </ul>
            </section>

            <section>
                <h2>Step 6: Generate & Send</h2>
                <p>Finalize your invoice and send it to your client:</p>
                <ul>
                    <li>Review all information for accuracy</li>
                    <li>Click 'Generate Invoice' to create a PDF</li>
                    <li>Download the PDF to your device</li>
                    <li>Send the invoice to your client via email</li>
                </ul>
            </section>

            <section>
                <h2>Best Practices for Professional Invoicing</h2>
                <p>Follow these tips to maintain professionalism and improve payment rates</p>
                <ul>
                    <li>Send invoices promptly after delivering goods or services</li>
                    <li>Use clear, professional language throughout the invoice</li>
                    <li>Ensure your payment terms are clearly visible</li>
                    <li>Follow up with reminders before the due date</li>
                    <li>Keep a consistent invoice numbering system</li>
                    <li>Archive copies of all invoices for your records</li>
                    <li>Personalize invoices with your brand colors and logo</li>
                    <li>Include a friendly thank you note to foster good relations</li>
                </ul>
                <p><strong>Remember:</strong> A well-designed, professional invoice not only helps you get paid faster but also reinforces your brand and professionalism.</p>
            </section>
        </div>
    );
};

export default InvoicingGuide;
