import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import ContainLogo from '../../components/ContainLogo';
import PageLayout from '../../components/layout/PageLayout';
import { ReactComponent as Bienvenue } from '../../images/icones/Bienvenue.svg';
import LucilePortrait from '../../images/LucileHomepage.png';

const Homepage = () => {
    const navigate = useNavigate();

    return (<PageLayout className='Homepage'>
        <div className='Homepage__top'>
            <div className='containPortraitTitle'>
                <div className='portrait'>
                    <div className='Lucile'>
                        <img alt='Portrait de Lucile' src={LucilePortrait} />
                    </div>
                    <ContainLogo className="bienvenue">
                        <Bienvenue />
                    </ContainLogo>
                </div>
                <p className='titlePortfolio'>Portfolio</p>
            </div>
            <div className='titleBeauty'>
                <div className='containText'>
                    <p className='first'>Beauté</p>
                    <p className='second'>Bien-être</p>
                </div>
            </div>
        </div>
        <Button value="En apprendre d'avantage sur moi !" onClick={() => navigate('/portfolio/about')} />
    </PageLayout>);
}

export default Homepage;