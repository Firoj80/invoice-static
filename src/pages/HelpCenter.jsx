const HelpCenter = () => {
    return (
        <div className="static-page-content">
            <h1>Help & Support</h1>
            <p>We're here to help you with any questions or issues you might have with <strong>ClearBillAI</strong>. Find the resources you need to make the most of our invoicing tool.</p>

            <section>
                <h2>Contact Us</h2>
                <p>Have a question or need assistance? Our support team is ready to help you.</p>
                <ul>
                    <li>Email us at <strong>help@clearbillai.com</strong></li>
                    <li>We aim to respond to all inquiries within 24 hours</li>
                    <li>Please include your invoice number if your question relates to a specific invoice</li>
                </ul>
            </section>

            <section>
                <h2>Frequently Asked Questions</h2>
                <p>Find quick answers to common questions about using ClearBillAI:</p>
                <ul className="faq-list">
                    <li><strong>How do I customize my invoice template?</strong></li>
                    <li><strong>Can I save my client information for future invoices?</strong></li>
                    <li><strong>How do I download my invoice as a PDF?</strong></li>
                    <li><strong>Is my invoice data secure?</strong></li>
                </ul>
            </section>

            <section>
                <h2>Resource Library</h2>
                <p>Access helpful resources to improve your invoicing process:</p>
                <ul>
                    <li>Invoicing best practices</li>
                    <li>Tips for getting paid faster</li>
                    <li>Understanding payment terms</li>
                    <li>How to handle late payments</li>
                </ul>
            </section>

            <section>
                <h2>Tutorials</h2>
                <p>Step-by-step guides to help you make the most of ClearBillAI:</p>
                <ul>
                    <li>Creating your first invoice</li>
                    <li>Adding your company logo</li>
                    <li>Setting up payment methods</li>
                    <li>Customizing invoice templates</li>
                </ul>
            </section>

            <section>
                <h2>Need Personalized Help?</h2>
                <p>If you can't find the answer you're looking for in our resources, please don't hesitate to reach out to our support team. We're committed to providing you with the best possible assistance.</p>
                <a href="/contact" className="btn-primary" style={{ display: 'inline-block', marginTop: '1rem', textDecoration: 'none' }}>Contact us</a>
            </section>
        </div>
    );
};

export default HelpCenter;
