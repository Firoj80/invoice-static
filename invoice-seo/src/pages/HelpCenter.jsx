import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const HelpCenter = () => {
    useSEO({
        title: 'Help Center & FAQ — ClearBill AI Free Invoice Generator',
        description: 'Get answers to common questions about ClearBill AI. Learn how to create invoices, download PDFs, customize templates, and manage your billing with our free invoice tool.',
        canonical: 'https://www.clearbillai.com/help-center',
    });

    return (
        <article className="static-page-content">
            <h1>Help Center — ClearBill AI Support &amp; FAQs</h1>
            <p>
                We're here to help you get the most out of <strong>ClearBill AI</strong>.
                Find answers to common questions below, or <Link to="/contact">contact our support team</Link> directly.
            </p>

            <section>
                <h2>Frequently Asked Questions</h2>

                <h3>Is ClearBill AI really free?</h3>
                <p>
                    Yes, completely. ClearBill AI is 100% free to use with no hidden fees,
                    no subscription required, and no credit card needed. You can create unlimited invoices at no cost.
                </p>

                <h3>Do I need to create an account to use ClearBill AI?</h3>
                <p>
                    No account is required. Visit <strong>www.clearbillai.com</strong> and start
                    creating invoices immediately. Your data is saved locally in your browser.
                </p>

                <h3>How do I download my invoice as a PDF?</h3>
                <p>
                    After filling in your invoice details, click the <strong>"Save &amp; Download"</strong> button.
                    Your invoice will be instantly generated and downloaded as a PDF to your device.
                    You can also click <strong>"Preview"</strong> first to review it before downloading.
                </p>

                <h3>Can I save my invoice and come back to it later?</h3>
                <p>
                    Yes. Your current invoice data is automatically saved to your browser's local storage.
                    When you return to ClearBill AI, your last invoice will still be there.
                    You can also save multiple invoices to your history using the "Save &amp; Download" button,
                    then reload them from the sidebar.
                </p>

                <h3>How do I add my business logo to the invoice?</h3>
                <p>
                    In the <strong>Business Details</strong> section at the top of the invoice form,
                    click the logo upload area. You can upload any PNG, JPG, or SVG image.
                    Your logo will appear on the invoice preview and in the PDF.
                </p>

                <h3>What currencies does ClearBill AI support?</h3>
                <p>
                    ClearBill AI supports 30+ global currencies including USD, EUR, GBP, INR, AUD, CAD,
                    and many more. Select your preferred currency from the dropdown in the invoice form.
                </p>

                <h3>Is my invoice data private?</h3>
                <p>
                    Yes. All invoice data is stored locally in your own browser and is never
                    uploaded to any external server. Your business information and client details
                    remain completely private on your device.
                </p>

                <h3>Can I customize invoice templates?</h3>
                <p>
                    Currently, ClearBill AI provides a clean, professional invoice template.
                    You can customize it by adding your logo, adjusting line items, notes, terms, and payment details.
                    Additional template options are available in the <a href="https://apps.clearbillai.com/features">Pro version</a>.
                </p>
            </section>

            <section>
                <h2>Getting Started</h2>
                <ul>
                    <li>Read the <Link to="/invoicing-guide">Step-by-step Invoicing Guide</Link></li>
                    <li>Learn about payment terms: Net 30, COD, Due on Receipt</li>
                    <li>Tips for getting paid on time</li>
                    <li>How to handle late payments professionally</li>
                </ul>
            </section>

            <section>
                <h2>Still Need Help?</h2>
                <p>
                    If you can't find the answer you're looking for, our support team is happy to help.
                    We aim to respond to all queries within 24 hours.
                </p>
                <Link to="/contact" className="btn-primary" style={{ display: 'inline-block', marginTop: '1rem', textDecoration: 'none' }}>
                    Contact Support
                </Link>
            </section>
        </article>
    );
};

export default HelpCenter;
