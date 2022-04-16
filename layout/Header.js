import Link from "next/link";
import { useEffect, useRef } from "react"

const Header = () => {

    const obsRef = useRef(null); //observer Element
    const headerRef = useRef(null);

    useEffect(()=> {
        const observer = new IntersectionObserver(obsHandler, { threshold : 0.5 });
        if(obsRef.current) observer.observe(obsRef.current);
        return () => { observer.disconnect(); }
    }, []);

    const obsHandler = ((entries) => { 
        const target = entries[0];
        if(target.isIntersecting){ //옵저버 중복 실행 방지
            console.log('보임');
            headerRef.current.classList.replace('show-header', 'hide-header');
        }else{
            console.log('안보임');
            headerRef.current.classList.replace('hide-header', 'show-header');
        }
    })

    const menu = [
        { id : 0, title : 'Home', path : '/' },
        { id : 1, title : 'About', path : '/about' },
        { id : 2, title : 'Portfolio', path : '/portfolio' },
        { id : 3, title : 'Contact', path : '/contact' },
    ];

    const clickNav = (e) => {
        e.preventDefault();
    }

    return(
    <>
    <div ref={obsRef} className="header-observer absolute top-0 h-1"/>
    <header ref={headerRef} className='hide-header header backdrop-blur-sm z-[9999]'>
        
        <div className="header-wrap h-16 flex justify-between items-center px-8">
            <h1 className="logo-wrap">
                <Link href="/">
                    <a href="/" className="bazzi text-4xl">&#60;꾸/&#62;</a>
                </Link>
            </h1>

            <nav className="nav-wrap">
                <ul className="nav-list flex justify-center items-center"> 
                    {
                    menu.map(m=>
                        <li key={m.id} className="text-lg mx-4">
                            <a onClick={clickNav} href="#" className="px-2 py-1">
                                {m.title}
                            </a>
                        </li>
                    )
                }
                </ul>
            </nav>
        </div>   
    </header>
    </>
    )
}

export default Header;