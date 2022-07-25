/** @type {import('next').NextConfig} */


const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // enables the styled-components SWC transform
    styledComponents: true,
    eslint: {
      ignoreDuringBuilds: true
    }
  },
  
  async rewrites(){
    return [
      {
        source: "/:slug*",
        destination: "http://localhost:5000/:slug*",
        // destination: "https://seal-app-uuoo5.ondigitalocean.app/:slug*"
      }
    ]
  }
   
}


module.exports = nextConfig
