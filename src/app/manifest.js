export default function manifest() {
    return {
      name: 'Portfolio By Nandini Pahuja',
      short_name: 'Nandini Pahuja Portfolio',
      description: 'Portfolio App showcasing Nandini Pahuja - CS Student, Tech Enthusiast & Creative Soul',
      start_url: '/',
      display: 'standalone',
    //   background_color: '#fff',
    //   theme_color: '#fff',
      icons: [
        {
          src: '/circular-favicon.svg',
          sizes: '32x32',
          type: 'image/svg+xml',
        },
          {
          src: '/circular-favicon.svg',
          sizes: '16x16',
          type: 'image/svg+xml',
        },
            {
          src: '/circular-favicon.svg',
          sizes: '192x192',
          type: 'image/svg+xml',
        },
            {
          src: '/circular-favicon.svg',
          sizes: '512x512',
          type: 'image/svg+xml',
        },
      ],
    }
  }