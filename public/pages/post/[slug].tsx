import { useRouter } from 'next/router'

const Content =()=>{
    const router = useRouter()
    return(
        <body>
            <h1>{router.query.slug}</h1>
        </body>
    )
}
export default Content