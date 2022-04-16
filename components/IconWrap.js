import { useRef } from "react";

const IconWrap = ({children, txt}) => {

    const iconRef = useRef(null);

    const clickEffect = (e) => {
        if(iconRef.current.classList.contains('rotate-[0deg]')){
            iconRef.current.classList.replace('rotate-[0deg]', 'rotate-[360deg]');
        }else{
            iconRef.current.classList.replace('rotate-[360deg]', 'rotate-[0deg]');
        }
    }

    return(
        <>
            <div onClick={clickEffect} className="relative inline-block p-0 mx-2.5 mt-6 mb-10 sm:m-2 md:my-4 md:mx-2 text-6xl md:text-7xl 
            hover:scale-[1.1] transition-[transform] ease-in-out duration-300 cursor-pointer select-none">
                <div ref={iconRef} className="skill-icon transition-[transform] rotate-[0deg] ease-in-out duration-700">
                    {children}
                </div>
                <div className="absolute bottom-[-2.5rem] sm:bottom-[-2rem] left-[50%] translate-x-[-50%] w-full font-bold text-sm text-center">{txt}</div>
            </div>
        </>
    )
}

export default IconWrap