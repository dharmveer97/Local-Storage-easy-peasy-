module.exports = {
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true,
  },
  env: {
    SITE_NAME: 'Test environment',
  },
  experimental: {
    appDir: true,
    typedRoutes: true,
    serverActions: true,
  },
  images: {
    domains: ['cdn.sanity.io', 'assets.vercel.com'],
  },
};
