/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig = {
  reactStrictMode: true,
  output: isGithubActions ? 'export' : undefined,
  basePath: isGithubActions ? '/vertice-contabilidade' : '',
  assetPrefix: isGithubActions ? '/vertice-contabilidade/' : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? '/vertice-contabilidade' : '',
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
