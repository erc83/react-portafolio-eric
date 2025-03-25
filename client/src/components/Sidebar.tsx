import React, { useState, useEffect } from 'react'
import { FaBars, FaArrowAltCircleUp, FaTimes } from "react-icons/fa"

const SidebarComponent: React.FC = () => {

    const [sidebarActive, setSidebarActive] = useState(false);
    const [menuIconActive, setMenuIconActive] = useState(false);
    const [scrollToTopVisible, setScrollToTopVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (document.documentElement.scrollTop > 100) {
                if (!scrollToTopVisible) {
                    setScrollToTopVisible(true);
                }
            } else {
                if (scrollToTopVisible) {
                    setScrollToTopVisible(false);
                }
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    }, [scrollToTopVisible]);

    // Función para manejar el toggle del menú
    const handleMenuToggle = (event: React.MouseEvent) => {
        event.preventDefault();
        setSidebarActive(!sidebarActive);
        setMenuIconActive(!menuIconActive);
    };


    const handleScrollTriggerClick = () => {
        setSidebarActive(false);
        setMenuIconActive(false);
    }

   /*  const fadeOut = (el: HTMLElement) => {
        let opacity = 1;
        const fade = () => {
            if((opacity -= .1) <= 0) {
                el.style.display = 'none';
            } else {
                el.style.opacity = opacity.toString();
                requestAnimationFrame(fade);
            }
        }
        fade();
    } */

    const fadeIn = (el: HTMLElement) => {
        let opacity = 0;
        const fade = () => {
            if ((opacity += 0.1) <= 1) {
                el.style.opacity = opacity.toString();
                requestAnimationFrame(fade);
            } else {
                el.style.display = "block";
            }
        };
        fade();
    };

    return (
        <div className="d-none d-lg-block">
            {/* Menu Toggle Button */}
            <button
                className={`menu-toggle rounded ${menuIconActive ? 'active': ''}` }   
                onClick={handleMenuToggle}
                title="Menu"
            >       
                    { menuIconActive ? <FaTimes size={25}/> : < FaBars size={25} /> }
                    
            </button>
            
            {/* Sidebar Wrapper */}
            <nav id="sidebar-wrapper" className={sidebarActive ? 'active' : ''}>
                <ul className="sidebar-nav">
                    <li className="sidebar-brand"><a href="#page-top" onClick={handleScrollTriggerClick}>Portafolio</a></li>
                    <li className="sidebar-nav-item"><a href="#page-top" onClick={handleScrollTriggerClick}>Top</a></li>
                    <li className="sidebar-nav-item"><a href="#about" onClick={handleScrollTriggerClick}>Acerca de Mí</a></li>
                    <li className="sidebar-nav-item"><a href="#caracteristicas" onClick={handleScrollTriggerClick}>Carácteristicas</a></li>
                    <li className="sidebar-nav-item"><a href="#portafolio" onClick={handleScrollTriggerClick}>Portfolio</a></li>
                    <li className="sidebar-nav-item"><a href="#contact" onClick={handleScrollTriggerClick}>Contáctame</a></li>
                </ul>
            </nav>

            {/* Scroll to Top Button */}
            {scrollToTopVisible && (
                <button
                    className="scroll-to-top"
                    onClick={() => window.scrollTo(0, 0)}
                    ref={(el) => {
                        if (el) fadeIn(el);
                    }}
                    title='scroll-top'
                >
                    < FaArrowAltCircleUp size="25px"/>
                </button>
            )}
        </div>   
    )
}

export default SidebarComponent

