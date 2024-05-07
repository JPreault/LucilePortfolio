import PageLayout from '../../components/layout/PageLayout';
import LucileNeige from '../../images/LucileNeige.png';
import Arrow from '../../images/Arrow.png';

const About = () => {

    return (<PageLayout className='About'>
        <div className='About__picture'>
            <div className='About__picture--textContainer'>
                <div className='About__picture--text'>
                    <p>Soucieuse du bien être de chacun</p>
                    <img alt='flèche haut gauche' src={Arrow} />
                </div>
                <div className='About__picture--text'>
                    <p>Adaptation</p>
                    <img alt='flèche bas gauche' className='bottom' src={Arrow} />
                </div>
            </div>
            <img className='About__picture--lucile' alt='Lucile Redin' src={LucileNeige} />
            <div className='About__picture--textContainer'>
                <div className='About__picture--text'>
                    <p>Passionnée</p>
                    <img alt='flèche haut droite' className='right' src={Arrow} />
                </div>
                <div className='About__picture--text'>
                    <p>A la recherche de responsabilités</p>
                    <img alt='flèche bas droite' className='right bottom' src={Arrow} />
                </div>
            </div>
        </div>
        <div className='About__infos'>
            <p className='About__infos--title'><span>L</span>ucile Redin, 19 ans</p>
            <div className='About__infos--content'>
                <p className='About__infos--subtitle'>Bonjour,</p>
                <p className='About__infos--text'>Passionnée par les cosmétiques, parfums mais surtout par le bien-être,  J’ai bien cerné les qualités requises pour exercer ce métier et acquérir les savoirs-faires et savoirs-êtres pour être une bonne praticienne. Sérieuse et motivée, je possède les qualités d’adaptation indispensables à la satisfaction au sein de votre entreprise.</p>
            </div>
        </div>
    </PageLayout>);
}

export default About;