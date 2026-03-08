import './SEOContent.css';

const SEOContent = () => {
    return (
        <section className="seo-content-container" aria-label="About ClearBill AI">
            <div className="seo-wrapper">
                {/* ✅ SEO: H2 here (H1 is in HeroSection) — avoids duplicate H1 */}
                <h2 className="seo-main-title">ClearBill AI: Free Professional Invoice Generator Online</h2>

                <div className="seo-grid">
                    <div className="seo-column">
                        <h3>Why Choose ClearBill AI?</h3>
                        <p>
                            ClearBill AI is a completely <strong>free invoice generator</strong> built for freelancers,
                            small businesses, and entrepreneurs who need professional invoices without the hassle.
                            Whether you need a <strong>bill generator</strong> for clients or a <strong>receipt maker</strong> for
                            completed payments, ClearBill AI handles it all — no subscriptions, no hidden fees,
                            and no limit on how many invoices you can create.
                        </p>

                        <h3 className="mt-large">Key Features of ClearBill AI</h3>
                        <p>
                            Our tool is designed to be the most accessible <strong>free invoice generator online</strong>.
                            Here's what makes it stand out:
                        </p>
                        <ul className="seo-features-list">
                            <li><strong>Instant PDF Generation:</strong> Create and download polished PDF invoices with a single click — no software to install.</li>
                            <li><strong>Multi-Currency Support:</strong> Invoice international clients easily with support for 30+ global currencies.</li>
                            <li><strong>Smart Auto-Calculations:</strong> Automatic subtotals, tax percentages, discounts, and shipping fees — zero manual math.</li>
                            <li><strong>Multiple Payment Methods:</strong> Supports Bank Transfer, PayPal, UPI, and custom payment links.</li>
                            <li><strong>Business Logo Upload:</strong> Brand your invoices with your company logo for a professional appearance.</li>
                            <li><strong>Local Storage Save:</strong> Invoice data auto-saves to your browser — your work is never lost.</li>
                            <li><strong>No Account Needed:</strong> Start invoicing immediately with zero signup friction.</li>
                        </ul>

                        <h3 className="mt-large">What Are the Essential Elements of a Professional Invoice?</h3>
                        <p>
                            A well-structured invoice improves your credibility and helps you get paid faster.
                            ClearBill AI ensures your invoices always include:
                        </p>
                        <ul className="seo-features-list element-list">
                            <li><strong>Invoice Header:</strong> Clearly labeled as "INVOICE" with your business branding.</li>
                            <li><strong>Unique Invoice Number:</strong> Auto-generated identifier for tracking and record-keeping (e.g., INV-001).</li>
                            <li><strong>Business &amp; Client Details:</strong> Full names, addresses, and contact information for both parties.</li>
                            <li><strong>Issue &amp; Due Dates:</strong> Clear timelines to establish when payment is expected.</li>
                            <li><strong>Itemized Line Items:</strong> Detailed breakdown of services or products with quantities, rates, and discounts.</li>
                            <li><strong>Tax &amp; Totals:</strong> Automatically calculated subtotal, tax amount, and total due.</li>
                            <li><strong>Payment Instructions:</strong> Clear bank details, PayPal, UPI, or other payment methods.</li>
                        </ul>
                    </div>

                    <div className="seo-column">
                        <h3>Who Is ClearBill AI For?</h3>
                        <p>
                            Our <strong>online invoice generator</strong> is built for anyone who bills for their work:
                        </p>
                        <ul className="seo-features-list">
                            <li><strong>Freelancers &amp; Consultants:</strong> Send polished invoices to clients without paying for expensive software.</li>
                            <li><strong>Small Business Owners:</strong> Manage billing professionally without complex accounting systems.</li>
                            <li><strong>Designers, Developers &amp; Creatives:</strong> Brand your invoices with logos and custom notes.</li>
                            <li><strong>International Sellers:</strong> Bill clients in any currency with automatic conversion support.</li>
                            <li><strong>Service Providers:</strong> From cleaners to coaches — anyone who provides services and needs to bill clients.</li>
                        </ul>

                        <h3 className="mt-large">Benefits of Using an Online Invoice Generator</h3>
                        <p>
                            Switching from spreadsheets or Word templates to ClearBill AI saves time and improves your professional image:
                        </p>
                        <ul className="seo-features-list">
                            <li>
                                <strong>Professional Image:</strong> Impress clients with beautifully designed, branded invoices.
                            </li>
                            <li>
                                <strong>Get Paid Faster:</strong> Clear, professional invoices with obvious payment details reduce payment delays.
                            </li>
                            <li>
                                <strong>Save Time:</strong> Fill in the details and generate a PDF in under a minute.
                            </li>
                            <li>
                                <strong>Eliminate Errors:</strong> Automated tax and total calculations remove costly mistakes.
                            </li>
                            <li>
                                <strong>Access Anywhere:</strong> Works in any web browser — no installation needed.
                            </li>
                            <li>
                                <strong>100% Free:</strong> No subscriptions, no trial periods — ClearBill AI is free forever.
                            </li>
                        </ul>

                        {/* ✅ SEO: FAQ section — paired with FAQPage schema in index.html for featured snippets */}
                        <h3 className="mt-large">Frequently Asked Questions</h3>
                        <div className="faq-list" itemScope itemType="https://schema.org/FAQPage">

                            <div className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                <h4 itemProp="name">Is ClearBill AI free to use?</h4>
                                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <p itemProp="text">Yes, ClearBill AI is 100% free. You can create unlimited professional invoices, download them as PDF, and use all features with no credit card or account required.</p>
                                </div>
                            </div>

                            <div className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                <h4 itemProp="name">Do I need to create an account?</h4>
                                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <p itemProp="text">No. Visit the site and start creating invoices immediately. Your invoice data is saved locally in your browser.</p>
                                </div>
                            </div>

                            <div className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                <h4 itemProp="name">Is my data private and secure?</h4>
                                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <p itemProp="text">Yes. All invoice data is stored locally in your browser and is never uploaded to any server. Your business and client information is completely private.</p>
                                </div>
                            </div>

                            <div className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                <h4 itemProp="name">Can I download invoices as PDF?</h4>
                                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <p itemProp="text">Yes. ClearBill AI generates a professional PDF invoice with a single click. No additional software needed.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SEOContent;
