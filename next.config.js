const isGithubActions = process.env.GITHUB_ACTIONS || false

const assetPrefix = isGithubActions ? "https://nekevss.github.io" : undefined

/** @type {import('next').NextConfig} */
const nextConfig = {
  // NOTE: output must be commented out in dev.
  output: "export",
  reactStrictMode: true,
  assetPrefix: assetPrefix,
}

module.exports = nextConfig
