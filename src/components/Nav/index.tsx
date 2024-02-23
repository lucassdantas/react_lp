import React, { useEffect, useState } from 'react'
import './style.css'



export const Nav = () => {
    const [blackHeader, setBlackHeader] = useState(false)

    useEffect(() => {
        addEventListener('scroll', () => {
            scrollY>100 && setBlackHeader(true)
            scrollY<100 && setBlackHeader(false)
        })

    },[])

    return (
        <div className={`nav-container ${blackHeader &&'nav-container-black'}`}>
            <img className="nav-logo" alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'/>
            <img className="nav-avatar" alt='avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU'/>
        </div>
    )
}
