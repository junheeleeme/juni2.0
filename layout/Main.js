import { useEffect } from 'react'
import dynamic from "next/dynamic"
import scrollOut from 'scroll-out'
import Skill from '../components/sector/Skill'


const NoSsrVoxel = dynamic(import('../components/Voxel'), {
    ssr : false
})

const Main = () => {

    useEffect(()=> {
        scrollOut({
            threshold: .2,
        });
    }, [])

    return(
    <main className='main px-4'>

        <section className='voxel-wrap relative h-[100vh]'>
            <NoSsrVoxel />
        </section>
        

        {/* data-scroll */}
        <Skill />
        
    </main>
    )
}

export default Main;