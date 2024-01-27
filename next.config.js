const nextConfig = {
  images: {
    domains: ['utfs.io', 'plotix-web-appv1.vercel.app'],
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
