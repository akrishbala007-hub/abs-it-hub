export default function Contact() {
    return (
        <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>Contact Us</h1>
            <div className="card" style={{ padding: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>ABS IT Hub</h2>
                <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                    We provide the best quality refurbished desktops and laptops in Coimbatore.
                </p>

                <div style={{ marginTop: '2rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Visit our Store</h3>
                    <address style={{ fontStyle: 'normal', lineHeight: 1.6, color: '#444' }}>
                        123, Cross Cut Road,<br />
                        Gandhipuram,<br />
                        Coimbatore - 641012<br />
                        Tamil Nadu, India.
                    </address>
                </div>

                <div style={{ marginTop: '2rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Call Us</h3>
                    <p><a href="tel:+919876543210" style={{ color: 'var(--primary-color)' }}>+91 98765 43210</a></p>
                </div>

                <div style={{ marginTop: '2rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Email</h3>
                    <p><a href="mailto:support@abtit.com" style={{ color: 'var(--primary-color)' }}>support@abtit.com</a></p>
                </div>
            </div>
        </div>
    );
}
