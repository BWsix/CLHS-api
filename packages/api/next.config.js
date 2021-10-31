/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://github.com/BWsix/CLHS-api',
        permanent: true,
      },
    ]
  },
}
