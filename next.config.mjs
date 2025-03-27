/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Экспортируем как статический сайт
  distDir: 'out',
  images: {
    unoptimized: true, // Необходимо для статического экспорта
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.same-assets.com', // Добавлено для поддержки дополнительных изображений
      },
    ],
  },
  trailingSlash: true, // Добавляем trailing slash для совместимости со статическим хостингом
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

export default nextConfig
