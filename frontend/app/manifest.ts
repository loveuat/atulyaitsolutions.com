import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Atulya IT Solutions',
    short_name: 'Atulya IT',
    description: 'Professional Web Development & Digital Solutions',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ff6600', // Your brand color
    orientation: 'portrait',
    scope: '/',
    lang: 'en',
    icons: [
      {
        src: '/latestlogo500.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/latestlogo500.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/latestlogo500.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}