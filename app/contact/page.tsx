import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact ABS IT Hub - Refurbished Laptops & Desktops in Coimbatore | Get in Touch',
    description: 'Contact ABS IT Hub for the best refurbished laptops and desktops in Coimbatore, Tamil Nadu. Visit our store at Sowripalayam or call +91 96007 07601. Affordable, quality computers with warranty.',
    keywords: [
        'contact ABS IT Hub',
        'refurbished laptops Coimbatore',
        'refurbished desktops Coimbatore',
        'second hand laptops Coimbatore',
        'used laptops Coimbatore',
        'computer shop Coimbatore',
        'laptop shop Sowripalayam',
        'ABS IT Hub Coimbatore address',
        'ABS IT Hub phone number',
        'buy refurbished computers Coimbatore',
        'affordable laptops Tamil Nadu',
        'quality refurbished computers',
    ],
    openGraph: {
        title: 'Contact ABS IT Hub - Refurbished Laptops & Desktops in Coimbatore',
        description: 'Get in touch with ABS IT Hub for quality refurbished laptops and desktops in Coimbatore. Visit our Sowripalayam store or call us today!',
        url: 'https://abs-it-hub-coimbatore.netlify.app/contact',
        siteName: 'ABS IT Hub',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Contact ABS IT Hub - Refurbished Laptops & Desktops in Coimbatore',
        description: 'Get in touch with ABS IT Hub for quality refurbished laptops and desktops in Coimbatore.',
    },
    alternates: {
        canonical: 'https://abs-it-hub-coimbatore.netlify.app/contact',
    },
};

export default function Contact() {
    // Structured data for Local Business SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "ABS IT Hub",
        "image": "https://abs-it-hub-coimbatore.netlify.app/logo.png",
        "description": "Leading provider of quality refurbished laptops and desktops in Coimbatore, Tamil Nadu. Affordable computers with warranty and certified quality.",
        "@id": "https://abs-it-hub-coimbatore.netlify.app",
        "url": "https://abs-it-hub-coimbatore.netlify.app",
        "telephone": "+919600707601",
        "email": "absithub2.0@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "94, Bharathipuram Near Cottolengo Convent 2nd Gate, Sowripalayam",
            "addressLocality": "Coimbatore",
            "postalCode": "641028",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 11.0168,
            "longitude": 76.9558
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "priceRange": "₹₹",
        "areaServed": {
            "@type": "City",
            "name": "Coimbatore"
        }
    };

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '800px' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                    Contact ABS IT Hub - Refurbished Laptops & Desktops in Coimbatore
                </h1>
                <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
                    Looking for quality refurbished laptops and desktops in Coimbatore? Visit ABS IT Hub at Sowripalayam for affordable, certified computers with warranty.
                </p>

                <div className="card" style={{ padding: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>ABS IT Hub - Your Trusted Computer Store in Coimbatore</h2>
                    <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                        We specialize in providing the best quality refurbished desktops and laptops in Coimbatore, Tamil Nadu.
                        All our computers are certified, tested, and come with warranty for your peace of mind.
                    </p>

                    <div style={{ marginTop: '2rem' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                            📍 Visit Our Store in Coimbatore
                        </h3>
                        <address style={{ fontStyle: 'normal', lineHeight: 1.6, color: '#444' }}>
                            <strong>ABS IT Hub</strong><br />
                            94, Bharathipuram Near Cottolengo Convent 2nd Gate,<br />
                            Sowripalayam<br />
                            Coimbatore - 641028<br />
                            Tamil Nadu, India
                        </address>
                        <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: '#666' }}>
                            <em>Open Monday - Saturday, 9:00 AM - 6:00 PM</em>
                        </p>
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                            📞 Call Us for Refurbished Laptops & Desktops
                        </h3>
                        <p><a href="tel:+919600707601" style={{ color: 'var(--primary-color)', fontSize: '1.1rem', fontWeight: 600 }}>+91 96007 07601</a></p>
                        <p style={{ fontSize: '0.95rem', color: '#666', marginTop: '0.5rem' }}>
                            Call us for inquiries about refurbished laptops, desktops, pricing, and warranty details.
                        </p>
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                            ✉️ Email Us
                        </h3>
                        <p><a href="mailto:absithub2.0@gmail.com" style={{ color: 'var(--primary-color)', fontSize: '1.1rem' }}>absithub2.0@gmail.com</a></p>
                        <p style={{ fontSize: '0.95rem', color: '#666', marginTop: '0.5rem' }}>
                            Send us your requirements and we'll get back to you with the best options.
                        </p>
                    </div>

                    <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#f0f9ff', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                            Why Choose ABS IT Hub for Refurbished Computers?
                        </h3>
                        <ul style={{ marginLeft: '1.5rem', lineHeight: 1.8 }}>
                            <li>✅ Certified quality refurbished laptops and desktops</li>
                            <li>✅ Warranty included on all products</li>
                            <li>✅ Affordable prices - Save up to 70% compared to new</li>
                            <li>✅ Located in Sowripalayam, Coimbatore for easy access</li>
                            <li>✅ Expert support and after-sales service</li>
                        </ul>
                    </div>
                </div>

                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <p style={{ fontSize: '1.1rem', color: '#444' }}>
                        <strong>Looking for affordable refurbished laptops in Coimbatore?</strong><br />
                        Visit ABS IT Hub today or browse our <a href="/shop" style={{ color: 'var(--primary-color)' }}>online catalog</a>.
                    </p>
                </div>
            </div>
        </>
    );
}
