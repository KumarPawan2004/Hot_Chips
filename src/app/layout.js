import './globals.css';

export const metadata = {
  metadataBase: new URL('https://sri-sabari-swami-hot-chips.vercel.app'),
  title: 'Sri Sabari Swami South Indian Hot Chips | Ranchi | Kanke Road',
  description: 'Authentic South Indian Hot Chips, freshly fried banana chips, murukku, mixtures, sweets and pickles in Kanke Road, Ranchi. 4.2★ Rated (77 Reviews). Order via WhatsApp & Call.',
  keywords: 'Hot Chips Ranchi, South Indian Hot Chips Kanke Road, Banana Chips Ranchi, Murukku Ranchi, Sri Sabari Swami Hot Chips, Jawahar Nagar Hatma Ranchi',
  openGraph: {
    title: 'Sri Sabari Swami South Indian Hot Chips | Ranchi',
    description: 'Freshly fried South Indian banana chips, murukku, mixtures and traditional savouries in Kanke Road, Ranchi. Rated 4.2★.',
    url: 'https://hot-chips-ranchi.local',
    siteName: 'Hot Chips Ranchi',
    images: [
      {
        url: '/images/storefront-night.png',
        width: 1200,
        height: 630,
        alt: 'Sri Sabari Swami South Indian Hot Chips Kanke Road Ranchi',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FastFoodRestaurant',
    name: 'Sri Sabari Swami South Indian Hot Chips',
    alternateName: 'Hot Chips Kanke Road Ranchi',
    image: ['/images/storefront-night.png', '/images/fresh-murukku.jpg'],
    telephone: '+919031082851',
    priceRange: '₹1–600',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '98Q7+PP7, Kanke Rd, Jawahar Nagar, Hatma',
      addressLocality: 'Ranchi',
      addressRegion: 'Jharkhand',
      postalCode: '834008',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 23.3892872,
      longitude: 85.3142875,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.2',
      reviewCount: '77',
      bestRating: '5',
      worstRating: '1',
    },
    servesCuisine: 'South Indian Snacks',
    openingHours: 'Mo-Su 09:00-22:30',
  };

  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#d97706" />
        <link rel="icon" href="/images/fresh-murukku.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#2D241E]">
        {children}
      </body>
    </html>
  );
}
