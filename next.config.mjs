export default {
    async redirects() {
      return [
        {
          source: '/',
          destination: 'https://hendrian-yudha.vercel.app', // Subdomain baru
          permanent: true,
        },
      ]
    },
  }
  