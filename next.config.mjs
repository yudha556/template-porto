module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: 'https://hendrian-yudha.vercel.app', // Subdomain baru
          permanent: true, // Set ke true untuk redirect 301 (permanent redirect)
        },
      ]
    },
  }
  