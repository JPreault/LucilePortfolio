import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as Immersive } from '../images/icones/immersive.svg';
import { ReactComponent as Logo } from '../images/icones/logo.svg';
import { ReactComponent as BackgroundMenu } from '../images/autres/backgroundMenu.svg';
import ContainLogo from './ContainLogo';
import { useState } from 'react';

const Skeletton = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const onPortfolio = pathname.includes('portfolio');
    const [openMenu, setOpenMenu] = useState(false);

    const links = {
        home: pathname.includes('spa') ? '/spa' : '/portfolio',
        about: '/portfolio/about',
        skills: '/portfolio/skills',
        professionalActions: '/portfolio/professionalActions',
        interests: '/portfolio/interests',
        contact: '/portfolio/contact',
    }

    function changeInterface() {
        navigate('/' + (!onPortfolio ? 'portfolio' : 'spa'));
    }

    return (<div className="Skeletton">
        <div className='pagesContainer'>
            <div className='header'>
                <ContainLogo className={`Logo ${!onPortfolio && 'spa'}`} onClick={() => navigate(links.home)}>
                    <Logo />
                </ContainLogo>
                {onPortfolio && <div className="separator hiddenOnTouch" />}
                <div className='Menu'>
                    {onPortfolio && <>
                        <Link className="hiddenOnTouch" selected={pathname === links.about} link={links.about} text={<><span>a</span> propos</>} />
                        <Link className="hiddenOnTouch" selected={pathname === links.skills} link={links.skills} text={<><span>m</span>es expériences<br />et mes compétences</>} />
                        <Link className="hiddenOnTouch" selected={pathname === links.professionalActions} link={links.professionalActions} text={<><span>m</span>es actions<br />professionnelles</>} />
                        <Link className="hiddenOnTouch" selected={pathname === links.interests} link={links.interests} text={<><span>m</span>es centres<br />d'intérêt</>} />
                        <Link className="hiddenOnTouch" selected={pathname === links.contact} link={links.contact} text={<><span>c</span>ontact</>} />
                    </>}
                    <ContainLogo className="immersive" onClick={changeInterface}>
                        <Immersive />
                        <div className={`circle ${!onPortfolio && 'spa'}`} />
                    </ContainLogo>
                </div >
            </div >
            <Outlet />
            <div className='footer'></div>
        </div>
        <div className={`slideMenu ${!openMenu ? 'open' : ''}`}>
            <div className='navigationMenu'>

            </div>
            <div className='displayButton' onClick={() => setOpenMenu(!openMenu)}>
                <BackgroundMenu />
                <i className={`icon fp-3x fpl fp-chevron-right ${!openMenu ? 'open' : ''}`} />
            </div>
        </div>
    </div>);
}

const Link = (data) => {
    const {
        className = "",
        selected = false,
        link = "",
        text = ""
    } = data;

    const navigate = useNavigate();

    return (
        <div className={`menuButton ${className} ${selected ? "selected" : ""}`} onClick={() => navigate(link)}>
            <p className="light">
                {text}
            </p>
            <p className="bold">
                {text}
            </p>
        </div >
    );
}

export default Skeletton;