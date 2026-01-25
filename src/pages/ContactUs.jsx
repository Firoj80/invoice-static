const ContactUs = () => {
    return (
        <div className="static-page-content">
            <h1>Contact Us</h1>
            <p>Have questions or suggestions? We'd love to hear from you.</p>

            <section>
                <h2>Get in Touch</h2>
                <p>Click the link below to send us an email directly:</p>
                <a
                    href="mailto:firojalama80@gmail.com"
                    style={{
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: '#2563eb', // Blue
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginTop: '0.5rem'
                    }}
                >
                    firojalama80@gmail.com
                </a>
            </section>
        </div>
    );
};

export default ContactUs;
