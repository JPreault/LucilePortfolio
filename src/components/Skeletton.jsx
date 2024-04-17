import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as Immersive } from '../images/immersive.svg';
import { ReactComponent as Logo } from '../images/logo.svg';

const Skeletton = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const onPortfolio = pathname.includes('portfolio');

    const links = {
        home: pathname.includes('spa') ? '/spa' : '/portfolio',
        about: '/portfolio/about',
        skills: '/portfolio/skills',
        professionalActions: '/portfolio/professionalActions',
        interests: '/portfolio/interests',
        contact: '/portfolio/contact',
    }

    function changeInterface() {
        const newLocation = pathname.includes('spa') ? 'portfolio' : 'spa';
        navigate('/' + newLocation);
    }

    return (<div className="Skeletton">
        <div className='header'>
            <div className='containLogo Logo' onClick={() => navigate(links.home)}>
                <Logo />
            </div>
            {onPortfolio && <div className='separator' />}
            <div className='Menu'>
                {onPortfolio && <>
                    <Link selected={pathname === links.about} link={links.about} text={<><span>a</span>propos</>} />
                    <Link selected={pathname === links.skills} link={links.skills} text={<><span>m</span>es expériences<br />et mes compétences</>} />
                    <Link selected={pathname === links.professionalActions} link={links.professionalActions} text={<><span>m</span>es actions<br />professionnelles</>} />
                    <Link selected={pathname === links.interests} link={links.interests} text={<><span>m</span>es centres<br />d'intérêt</>} />
                    <Link selected={pathname === links.contact} link={links.contact} text={<><span>c</span>ontact</>} />
                </>}
                <div className="containLogo immersive" onClick={changeInterface}>
                    <Immersive />
                </div>
            </div >
        </div >
        <Outlet />
        <div className='footer'>
        </div>
    </div >);
}

const Link = (data) => {
    const {
        selected = false,
        link = "",
        text = ""
    } = data;

    const navigate = useNavigate();

    return (
        <div className={`menuButton ${selected ? "selected" : ""}`} onClick={() => navigate(link)}>
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