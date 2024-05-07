import PageLayout from '../../components/layout/PageLayout';
import LucileContact from '../../images/LucileContact.png';
import ContainLogo from '../../components/ContainLogo';
import { ReactComponent as Mail } from '../../images/icones/mail.svg';
import { ReactComponent as Home } from '../../images/icones/home.svg';
import { ReactComponent as Phone } from '../../images/icones/phone.svg';

const Contact = () => {

    return (<PageLayout className='Contact'>
        <div className='Contact__text'>
            <div className='Contact__text--titles'>
                <div className='Contact__text--mainTitle'>
                    <p>Travaillons ensemble</p>
                </div>
                <div className='Contact__text--subTitle'>
                    <p>Mes contacts</p>
                </div>
            </div>
            <div className='Contact__text--infos onDesktop'>
                <ContainLogo className="Contact__text--icon">
                    <Mail />
                </ContainLogo>
                <p className='Contact__text--text underline'>lucileredin1@gmail.com</p>
                <ContainLogo className="Contact__text--icon">
                    <Home />
                </ContainLogo>
                <p className='Contact__text--text flex'>
                    91 route de Saint Herblain,
                    <span className='underline'>44100, Nantes FRANCE</span>
                </p>
                <ContainLogo className="Contact__text--icon">
                    <Phone />
                </ContainLogo>
                <p className='Contact__text--text underline'>+33 7 83 77 13 89</p>
            </div>
        </div>
        <div className='Contact__picture'>
            <img className='Contact__picture--lucile' alt='Lucile Redin' src={LucileContact} />
        </div>
        <div className='Contact__text--infos onTouch'>
            <ContainLogo className="Contact__text--icon">
                <Mail />
            </ContainLogo>
            <p className='Contact__text--text underline'>lucileredin1@gmail.com</p>
            <ContainLogo className="Contact__text--icon">
                <Home />
            </ContainLogo>
            <p className='Contact__text--text flex'>
                91 route de Saint Herblain,
                <span className='underline'>44100, Nantes FRANCE</span>
            </p>
            <ContainLogo className="Contact__text--icon">
                <Phone />
            </ContainLogo>
            <p className='Contact__text--text underline'>+33 7 83 77 13 89</p>
        </div>
    </PageLayout>);
}

export default Contact;