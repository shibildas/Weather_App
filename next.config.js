/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["images.unsplash.com","openweathermap.org"]
    },
    reactStrictMode:true,
    env:{
        WEATHER_KEY:process.env.WEATHER_KEY
    },
}

module.exports = nextConfig
