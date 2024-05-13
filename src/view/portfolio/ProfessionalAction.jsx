import PageLayout from '../../components/layout/PageLayout';
import ChallengeVente from '../../images/ChallengeVente.png';
import Maquillage1 from '../../images/Maquillage1.png';
import Maquillage2 from '../../images/Maquillage2.png';
import Offres from '../../images/Offres.png';
import OffreSpé from '../../images/OffreSpé.png';

const ProfessionalAction = () => {

    return (<PageLayout className='ProfessionalAction'>
        <div className='ProfessionalAction__challenge'>
            <div className='ProfessionalAction__challenge--text'>
                <div className='containText'>
                    <div className='title'>
                        <p className='number'>01</p>
                        <p className='name'>Challenge</p>
                        <p className='location'>En entreprise</p>
                    </div>
                    <p className='text'>J’ai eu la chance d’organiser un challenge pour booster les ventes. Ce challenge concerne les crèmes et les sérums visage haut de gamme. Le but de cette animation est d’augmenter le chiffre d’affaires, d’améliorer les compétences en vente de l’équipe ainsi que leurs connaissances sur les produits concernés.</p>
                </div>
            </div>
            <div className='ProfessionalAction__challenge--image'>
                <img className='challengeVente' alt='ChallengeVente' src={ChallengeVente} />
            </div>
        </div>
        <div className='ProfessionalAction__maquillage'>
            <div className='ProfessionalAction__maquillage--text'>
                <div className='containText'>
                    <div className='title'>
                        <p className='number'>02</p>
                        <p className='name'>maquillage</p>
                        <p className='location'>En formation</p>
                    </div>
                    <p className='text'>Dans le cadre de mon Bac professionnel à Saint Gab’ j’ai eu la chance de réaliser plusieurs actions liées au maquillage. Lors de la fête patronale et de la fête des talents mon groupe de travail et moi avons proposé des grimages pour enfant ainsi que des maquillages yeux et lèvre. Un groupe de CAP ont proposé des modelages de mains. </p>
                </div>
            </div>
            <div className='ProfessionalAction__maquillage--image'>
                <div className='containImage'>
                    <img className='maquillage im1' alt='Maquillage1' src={Maquillage1} />
                    <img className='maquillage im2' alt='Maquillage2' src={Maquillage2} />
                </div>
            </div>
        </div>
        <div className='ProfessionalAction__offres'>
            <div className='ProfessionalAction__offres--text'>
                <div className='containText'>
                    <div className='title'>
                        <p className='number'>03</p>
                        <p className='name'>Offres<br />promotionnelles</p>
                    </div>
                    <p className='text'>Jai pu mettre en place 2 offres promotionnelles. La première concerne un soin de 4h incluant : un gommage corporel, un enveloppement, un massage d’1h, un shampooing, un massage du cuir chevelu, un soin du cheveu, un brushing et un coaching maquillage. Cette prestation, facturée à la base 220€ HT, a bénéficié d'une promotion à 140€ HT. La responsable m'a fait confiance et elle m'a laissé gérer toutes ces offres seules, , donc j'ai pu accompagner mes clientes du début à la fin sauf pour la partie coiffure.</p>
                    <p className='text'>La deuxième offre comprend un gommage corporel, un enveloppement et massage d’une heure au prix de 90€ HT au lieu de 110€ HT. Cette offre a bien fonctionné également puisqu’elle reste abordable pour la majorité des clientes chez Escale Beauté. Ces offres ont été programmées du 23/11/2021 au 11/12/2021. (3 semaines)</p>
                    <p className='text'>Pour ces 3 premières offres, j’ai pu créer un flyer affiché sur la porte d’entrée de l'institut de beauté. J’ai également pu envoyer des SMS à tout le répertoire du téléphone professionnel et créer un poste Facebook.</p>
                </div>
            </div>
            <div className='ProfessionalAction__offres--image'>
                <img className='offres' alt='Offres' src={Offres} />
                <img className='offreSpé' alt='OffreSpé' src={OffreSpé} />
            </div>
        </div>
    </PageLayout >);
}

export default ProfessionalAction;