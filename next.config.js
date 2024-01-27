const nextConfig = {
  images: {
    domains: ['utfs.io', '*.vercel.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: ''
      }
    ]
  }
}

module.exports = nextConfig
