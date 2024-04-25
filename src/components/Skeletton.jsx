import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as Immersive } from '../images/icones/immersive.svg';
import { ReactComponent as Logo } from '../images/icones/logo.svg';
import { ReactComponent as BackgroundMenu } from '../images/autres/backgroundMenu.svg';
import ContainLogo from './ContainLogo';
import { useCallback, useState } from 'react';
import useOnResize from '../hooks/useOnResize';

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

    const updateHeight = useCallback(() => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--doc-height', `${vh}px`);
    }, []);

    useOnResize(() => {
        updateHeight();
    });

    updateHeight();

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
            {pathname.includes('portfolio') && <div className='footer'></div>}
        </div>
        {pathname.includes('portfolio') && <div className={`slideMenu hiddenOnDesktop ${!openMenu ? 'open' : ''}`}>
            <div className='navigationMenu'>
                <ContainLogo className={`Logo ${!onPortfolio && 'spa'}`} onClick={() => navigate(links.home)}>
                    <Logo />
                </ContainLogo>
                <div className="separator main" />
                <div className='Menu'>
                    <Link selected={pathname === links.about} link={links.about} text={<><span>a</span> propos</>} />
                    <div className="separator" />
                    <Link selected={pathname === links.skills} link={links.skills} text={<><span>m</span>es expériences<br />et mes compétences</>} />
                    <div className="separator" />
                    <Link selected={pathname === links.professionalActions} link={links.professionalActions} text={<><span>m</span>es actions<br />professionnelles</>} />
                    <div className="separator" />
                    <Link selected={pathname === links.interests} link={links.interests} text={<><span>m</span>es centres<br />d'intérêt</>} />
                    <div className="separator" />
                    <Link selected={pathname === links.contact} link={links.contact} text={<><span>c</span>ontact</>} />
                </div>
            </div>
            <div className='displayButton' onClick={() => setOpenMenu(!openMenu)}>
                <BackgroundMenu />
                <i className={`icon fp-2x fpl fp-chevron-right ${!openMenu ? 'open' : ''}`} />
            </div>
        </div>}
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