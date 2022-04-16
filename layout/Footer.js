import React from 'react'


const Footer = () => {
    return(
    <footer className='footer h-12 flex justify-center items-center text-sm border-t'>
        { new Date().getFullYear() +'. juni-official All rights reserved'}
    </footer>
    )
}

export default Footer;