/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["images.unsplash.com"]
    },
    reactStrictMode:true,
    env:{
        WEATHER_KEY:process.env.WEATHER_KEY
    },
}

module.exports = nextConfig
