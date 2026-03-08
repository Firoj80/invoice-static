import useSEO from '../hooks/useSEO';

const ContactUs = () => {
    useSEO({
        title: 'Contact Us — ClearBill AI Support',
        description: 'Get in touch with the ClearBill AI team. We\'re happy to help with questions, feedback, or support for our free invoice generator.',
        canonical: 'https://www.clearbillai.com/contact',
    });

    return (
        <article className="static-page-content">
            <h1>Contact ClearBill AI</h1>
            <p>Have a question, feedback, or need support? We'd love to hear from you.</p>

            <section>
                <h2>Get in Touch</h2>
                <p>Reach our support team by email and we'll get back to you within 24 hours:</p>
                <a
                    href="mailto:help@clearbillai.com"
                    style={{
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: '#2563eb',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginTop: '0.5rem'
                    }}
                    aria-label="Email ClearBill AI support"
                >
                    help@clearbillai.com
                </a>
            </section>

            <section>
                <h2>What Can We Help With?</h2>
                <ul>
                    <li>Questions about how to use ClearBill AI</li>
                    <li>Feature requests and product feedback</li>
                    <li>Bug reports or technical issues</li>
                    <li>General billing and invoicing questions</li>
                </ul>
            </section>
        </article>
    );
};

export default ContactUs;
