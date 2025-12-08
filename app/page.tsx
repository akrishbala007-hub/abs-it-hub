import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/lib/db';
import { FadeIn, StaggerContainer, FadeInItem } from '@/components/MotionWrapper';

export const dynamic = 'force-dynamic';

export default function Home() {
  const products = getProducts().slice(0, 3); // Featured items

  return (
    <>
      <Hero />

      {/* What is a Refurbished Product? */}
      <section className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
        <FadeIn>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>What is a Refurbished Product?</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 2rem', fontSize: '1.1rem', color: '#444' }}>
            Refurbished laptops and desktops are <strong>pre-owned devices restored to like-new condition</strong>.
            At ABS IT Hub, every computer undergoes <strong>rigorous testing, repairs, and quality checks</strong> before resale.
          </p>
        </FadeIn>
        <StaggerContainer delay={0.2}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <FadeInItem>
              <div className="card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>✅ Certified Quality</h3>
                <p>Tested for performance and reliability</p>
              </div>
            </FadeInItem>
            <FadeInItem>
              <div className="card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>✅ Affordable Pricing</h3>
                <p>Save up to 70% compared to new models</p>
              </div>
            </FadeInItem>
            <FadeInItem>
              <div className="card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>✅ Eco-Friendly Choice</h3>
                <p>Reduce e-waste and support sustainability</p>
              </div>
            </FadeInItem>
          </div>
        </StaggerContainer>
        <FadeIn delay={0.4}>
          <p style={{ marginTop: '2rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
            Buying refurbished means you get <strong>top performance at a fraction of the cost</strong>.
          </p>
        </FadeIn>
      </section>

      {/* Why Choose ABS IT Hub? */}
      <section style={{ backgroundColor: 'var(--surface-color)', padding: '4rem 0' }}>
        <div className="container" style={{ padding: '0 1.5rem' }}>
          <FadeIn>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>Why Choose ABS IT Hub?</h2>
          </FadeIn>
          <StaggerContainer delay={0.1}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              <FadeInItem>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔒</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Warranty Included</h3>
                  <p>Peace of mind with every purchase</p>
                </div>
              </FadeInItem>
              <FadeInItem>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚡</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>High Performance</h3>
                  <p>Devices optimized for speed and reliability</p>
                </div>
              </FadeInItem>
              <FadeInItem>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💰</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Budget-Friendly</h3>
                  <p>Affordable computers for every need</p>
                </div>
              </FadeInItem>
              <FadeInItem>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🌍</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Eco-Conscious</h3>
                  <p>Promote sustainability by reusing technology</p>
                </div>
              </FadeInItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="container" style={{ padding: '4rem 1.5rem' }}>
        <FadeIn>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Product Showcase</h2>
            <a href="/shop" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>View All &rarr;</a>
          </div>
        </FadeIn>

        <StaggerContainer>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {products.map((product) => (
              <FadeInItem key={product.id}>
                <ProductCard product={product} />
              </FadeInItem>
            ))}
          </div>
        </StaggerContainer>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <FadeIn delay={0.2}>
            <p style={{ color: 'var(--text-secondary)' }}>Each product comes with <strong>detailed specs, warranty, and competitive pricing</strong>.</p>
          </FadeIn>
        </div>
      </section>

      {/* Key Things to Check */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '4rem 0' }}>
        <div className="container" style={{ padding: '0 1.5rem' }}>
          <FadeIn>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>Key Things to Check Before Buying</h2>
          </FadeIn>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <StaggerContainer>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem' }}>
                <FadeInItem>
                  <li style={{ background: 'white', padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)' }}>
                    <strong>📑 Warranty Coverage</strong> – Always check the warranty period
                  </li>
                </FadeInItem>
                <FadeInItem>
                  <li style={{ background: 'white', padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)' }}>
                    <strong>🛠️ Hardware Specs</strong> – RAM, SSD, processor, and graphics card
                  </li>
                </FadeInItem>
                <FadeInItem>
                  <li style={{ background: 'white', padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)' }}>
                    <strong>🔍 Seller Reputation</strong> – Buy only from certified sellers like ABS IT Hub
                  </li>
                </FadeInItem>
                <FadeInItem>
                  <li style={{ background: 'white', padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)' }}>
                    <strong>💡 Price vs Performance</strong> – Compare with new models to see the savings
                  </li>
                </FadeInItem>
              </ul>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
        <FadeIn>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>About Us</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 1.5rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
            ABS IT Hub is dedicated to providing <strong>affordable refurbished laptops and desktops</strong> with unmatched quality and service.
            We believe refurbished products are the <strong>smart choice</strong> for students, businesses, and professionals.
          </p>
          <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--primary-color)' }}>
            Mission: Deliver reliable technology at affordable prices while promoting eco-friendly practices.
          </p>
        </FadeIn>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <FadeIn>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>Customer Testimonials</h2>
          </FadeIn>
          <StaggerContainer delay={0.2}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <FadeInItem>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: 'var(--radius)' }}>
                  <p style={{ fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '1rem' }}>"ABS IT Hub gave me a reliable refurbished laptop at half the price of new!"</p>
                </div>
              </FadeInItem>
              <FadeInItem>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: 'var(--radius)' }}>
                  <p style={{ fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '1rem' }}>"Their desktops are powerful, affordable, and backed by great service."</p>
                </div>
              </FadeInItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
        <FadeIn scale>
          <div style={{ backgroundColor: '#111', color: 'white', padding: '3rem', borderRadius: 'var(--radius)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Looking for affordable refurbished laptops and desktops?</h2>
            <p style={{ marginBottom: '2rem', color: '#ccc' }}>Shop now with ABS IT Hub.</p>
            <a href="/shop" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>Browse Products</a>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
