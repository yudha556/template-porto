export default {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home', // Subdomain baru
          permanent: true,
        },
      ]
    },
  }
  