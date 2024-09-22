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
            },
            {
                source:'/projects',
                destination:'/projects.html'
            }
        ]
    }
}

module.exports = nextConfig
