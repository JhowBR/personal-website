/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/spellapi',
        destination: '/spellapi/introduction',
        permanent: true,
      },
    ]
  },

  i18n: {
    locales: ['en', 'pt-br'],
    defaultLocale: 'en'
  }
}

module.exports = nextConfig
