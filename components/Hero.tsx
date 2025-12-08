export default function Hero() {
    return (
        <section style={{ backgroundColor: 'var(--surface-color)', padding: '5rem 0', textAlign: 'center' }}>
            <div className="container">
                <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
                    Affordable Refurbished <br /> Laptops & Desktops <br />
                    <span style={{ color: 'var(--primary-color)' }}>Quality You Can Trust</span>
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
                    Discover certified refurbished computers with warranty, service, and unbeatable prices. Perfect for students, professionals, and businesses.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="/shop?category=laptop" className="btn btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '1.125rem' }}>
                        Shop Refurbished Laptops
                    </a>
                    <a href="/shop?category=desktop" className="btn btn-outline" style={{ padding: '0.75rem 2rem', fontSize: '1.125rem' }}>
                        Shop Refurbished Desktops
                    </a>
                </div>
            </div>
        </section>
    );
}
