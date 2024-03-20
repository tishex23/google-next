/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
            pathname: '**',
          },
        ],
      },
};

const experimental = {
  missingSuspenseWithCSRBailout: false,
};

export default { ...nextConfig, experimental };
