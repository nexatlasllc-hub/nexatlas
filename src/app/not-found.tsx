import Link from 'next/link';

// Global fallback for routes outside the locale tree. Provides its own
// <html>/<body> because no root layout wraps this segment.
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0 }}>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 24,
            color: '#14110E',
          }}
        >
          <h1 style={{ fontSize: 40, marginBottom: 12 }}>Page not found</h1>
          <p style={{ color: '#555', marginBottom: 24 }}>
            Let’s get you back to discovering Uzbekistan.
          </p>
          <Link
            href="/en"
            style={{
              background: '#C8A04B',
              color: '#14110E',
              padding: '12px 24px',
              borderRadius: 999,
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Go to homepage
          </Link>
        </div>
      </body>
    </html>
  );
}
