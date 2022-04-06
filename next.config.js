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
}

module.exports = nextConfig
