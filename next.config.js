/** @type {import('next').NextConfig} */
const repoName = 'ai-day'; // Change if your repo name is different
const isGithubPages = process.env.GITHUB_PAGES === 'true';

// To use GitHub Pages settings, run: GITHUB_PAGES=true npm run build
const nextConfig = {
  output: 'export', // Enable SSG for static export
  ...(isGithubPages && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  })
};

module.exports = nextConfig;
