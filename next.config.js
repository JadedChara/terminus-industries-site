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
                source:'/nightstrike-s-nook',
                destination:'/pages/nook.html'
            },
            {
                source:'/projects',
                destination:'/pages/projects.html'
            },
            {
                source:'/projects/coding',
                destination:'/pages/codingprojects.html'
            },
            {
                source:'/projects/papercraft',
                destination:'/pages/papercraftprojects.html'
            },
            {
                source:'/projects/nightstrike-s-customs',
                destination:'/pages/tfprojects.html'
            },
            {
                source:'/projects/misc',
                destination:'/pages/miscprojects.html'
            }
        ]
    }
}

module.exports = nextConfig
