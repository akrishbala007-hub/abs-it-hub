import Image from 'next/image';
import { FadeIn } from './MotionWrapper';

export default function Hero() {
    return (
        <section style={{ backgroundColor: 'var(--surface-color)', padding: '5rem 0', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                    {/* Left Content */}
                    <div style={{ textAlign: 'left' }}>
                        <FadeIn>
                            <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
                                Affordable Refurbished <br />
                                <span style={{ color: 'var(--primary-color)' }}>Laptops & Desktops</span>
                            </h1>
                            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
                                Discover certified refurbished computers with warranty, service, and unbeatable prices.
                                <br />Quality you can trust, prices you'll love.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <a href="/shop?category=laptop" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                                    Shop Laptops
                                </a>
                                <a href="/shop?category=desktop" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                                    Shop Desktops
                                </a>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Image */}
                    <FadeIn delay={0.2} scale>
                        <div style={{ position: 'relative' }}>
                            <div style={{
                                position: 'absolute',
                                top: '-20px',
                                right: '-20px',
                                width: '100%',
                                height: '100%',
                                background: 'var(--primary-color)',
                                opacity: 0.1,
                                borderRadius: '2rem',
                                transform: 'rotate(3deg)',
                                zIndex: 0
                            }}></div>
                            <Image
                                src="/hero-laptop.png"
                                alt="Refurbished Laptop Setup"
                                width={600}
                                height={400}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '1.5rem',
                                    position: 'relative',
                                    zIndex: 1,
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                }}
                            />
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
}
