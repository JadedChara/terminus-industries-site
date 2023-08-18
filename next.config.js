/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites(){
        return [
            {
                source:'/',
                destination:'/index.html'
            },
            {
                source:'/about',
                destination:'/pages/about.html'
            },
            {
                source:'/nightstrike-nook',
                destination:'/pages/nook.html'
            }
        ]
    }
}

module.exports = nextConfig
