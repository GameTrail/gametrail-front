const withPWA = require('next-pwa')({
  dest: 'public',
});

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['c4.wallpaperflare.com', 'vignette4.wikia.nocookie.net',
      'www.empireposter.de', 'i1.wp.com', 'i.ytimg.com',
      'juegosfullparapc.com', '2.bp.blogspot.com', '3.bp.blogspot.com',
      'i.3djuegos.com', 'vignette4.wikia.nocookie.net', 'www.empireposter.de',
      'i1.wp.com', 'i.ytimg.com', 'juegosfullparapc.com', 'i.imgur.com',
      'cdnb.artstation.com', 'upload.wikimedia.org', 'via.placeholder.com',
      'steamavatar.io', 'i.imgur.com', 'cdnb.artstation.com', 'upload.wikimedia.org',
      'via.placeholder.com', 'store-images.s-microsoft.com', 'cdn.cloudflare.steamstatic.com',
      'img.lovepik.com', 'cdn.pixabay.com', 'images.igdb.com', 'randomuser.me',
      'imgs.search.brave.com', 'media.tenor.com', 'avatars.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
});

module.exports = nextConfig;
