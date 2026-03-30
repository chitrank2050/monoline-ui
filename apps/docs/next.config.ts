import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	transpilePackages: [
		"@chitrank2050/foundry-tokens",
		"@chitrank2050/foundry-ui",
	],
}

export default nextConfig
