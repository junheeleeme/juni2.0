import { useRef, useEffect, useState } from "react"
import Rellax from 'Rellax'

const Voxel = () => {

    let course = 0;
    const speedTable = [2500, 1500, 900, 400, 200, 120, 80, 50, 40, 30, 20, 10];
    
    const [loaded, setLoaded] = useState(false);
    const view = useRef(null); //속성 변화 감지 노드
    const wrapRef = useRef(null);
    
    useEffect(()=>{
        const interval = setInterval(() => {
            if(view.current.loaded === true) {
                setLoaded(true);
                Init();
                clearInterval(interval);
            }
        }, 500);
        const rellax = new Rellax(wrapRef.current);
    }, []);

    const Init = () => {
        setTimeout(()=>{
            const interval2 = setInterval(() => {
                const before = Number(view.current.getAttribute('rotation-per-second').replace('deg', ''));
                if( before < 20){
                    clearInterval(interval2);
                }else{
                    view.current.setAttribute('rotation-per-second', speedTable[++course]+'deg');
                }
            }, 360);
        }, 500)
    }


    return(
        <>
            <div ref={wrapRef} className={`w-full h-[600px] mt-[calc((100vh-700px)/2)]`} data-rellax-speed="-5">
            
                <div className={`absolute top-0 left-0 w-full h-full flex justify-center items-center h-[600px] ${!loaded ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="load-3">
                        <div className="line"/>
                        <div className="line"/>
                        <div className="line"/>
                    </div>
                </div>   
                
                <div className={`voxel-viewer-wrap w-full h-full ${loaded ? 'opacity-100' : 'opacity-0'}  transition-all duration-700`}>
                    <model-viewer ref={view} src='/voxel/juni-coding-voxel.gltf' alt='꾸생 Voxel Avatar' camera-controls  autoplay auto-rotate
                    shadow-intensity="2.5" shadow-softness='1' camera-orbit='150deg 65deg 100%' 
                    environment-image='neutral' interaction-prompt='none'  max-camera-orbit="Infinity 180deg auto" min-camera-orbit='-Infinity 0deg auto' interpolation-decay='30'
                    auto-rotate-delay='0' rotation-per-second={speedTable[0]+'deg'} exposure='1' disable-zoom  
                    style={{'width': '100%', 'height' : '100%' , '--progress-bar-height' : '0' , '--progress-mask' : 'none', '--poster-color':  'transparent', 'outline' : '0' }} />
                </div>

            </div>
        </>
    )
}


export default Voxel