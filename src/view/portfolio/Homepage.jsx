import Button from '../../components/Button';
import ContainLogo from '../../components/ContainLogo';
import PageLayout from '../../components/layout/PageLayout';
import { ReactComponent as Bienvenue } from '../../images/icones/Bienvenue.svg';
import LucilePortrait from '../../images/LucileHomepage.png';

const Homepage = () => {

    return (<PageLayout className='Homepage'>
        <div className='Homepage__top'>
            <div className='portrait'>
                <div className='Lucile'>
                    <img alt='Portrait de Lucile' src={LucilePortrait}/>
                </div>
                <ContainLogo className="bienvenue">
                    <Bienvenue/>
                </ContainLogo>
            </div>
            <p className='titlePortfolio'>Portfolio</p>
            <p className='titleBeauty'>Beauté<br/>bien-être</p>
        </div>
        <Button value="En apprendre d'avantage sur moi !"/>
    </PageLayout>);
}

export default Homepage;