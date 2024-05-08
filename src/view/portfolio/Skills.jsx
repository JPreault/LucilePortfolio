import PageLayout from '../../components/layout/PageLayout';
import Background1 from '../../images/Background1.png';
import Background2 from '../../images/Background2.png';
import Background3 from '../../images/Background3.png';

const Skills = () => {

    return (<PageLayout className='Skills'>
        <div className='Skills__top'>
            <div className='Skills__top--left'>
                <div className='Skills__top--skills'>
                    <p className='title'>Compétences</p>
                    <p>- Vente et conseille en parfumerie</p>
                    <p>- Épilation jambes, aiselles, sourcils et visage</p>
                    <p>- Soin visage et corps</p>
                    <p>- Massages visage (relaxant et kobido)</p>
                    <p>- Massages corps (ayurvédique, balinais, orientale, polynésien, femme enceinte, pierres chaudes, détox, réflexologie jambes et pieds)</p>
                    <p>- Maquillage jour, flash, soir, cocktail, événement</p>
                    <p>- Soin des mains et des pieds</p>
                </div>
                <img className='Skills__top--image onDesktop' alt='Beautifull_image' src={Background1} />
            </div>
            <div className='Skills__top--right'>
                <p className='title'>Expériences</p>
                <div className='Skills__top--listExperience'>
                    <div className='backgroundLine'></div>
                    <div className='experience'>
                        <p className='year'>2024</p>
                        <p>CINQ MONDES — 2 ans d'alternance en BTS MECP<br />option A (spa praticienne) du 05/07/2022 au 30/08/24</p>
                    </div>
                    <div className='experience'>
                        <p className='year'>2021</p>
                        <p>ESCALE BEAUTE — Stagiaire (Esthéticienne)<br />du 18/10/2021 au 23/10/2021 et du 22/11/2021 au 18/12/2021<br />Mise en place d'actions promotionnelle et d'enquête de satisfaction</p>
                    </div>
                    <div className='experience'>
                        <p className='year'>2021</p>
                        <p>VITAL ET SENS — Stagiaire (Esthéticienne)<br />du 07/06/2021 au 03/07/2021<br />Soin visage, épilation et soin corps</p>
                    </div>
                    <div className='experience'>
                        <p className='year'>2020</p>
                        <p>YVES ROCHER — Stagiaire (Vendeuse et conseillère)<br />du 22/11/2020 au 18/12/2020<br />Vente et conseille, prise en charge de la clientèle</p>
                    </div>
                    <div className='experience'>
                        <p className='year last'>2020</p>
                        <p>BOUDOIR DES SENS — Stagiaire (Esthéticienne)<br />du 27/01/2020 au 14/02/2020<br />Epilation, soin visage</p>
                    </div>
                </div>
            </div>
            <img className='Skills__top--image onTouch' alt='Beautifull_image' src={Background1} />
        </div>
        <div className='Skills__middle'>
            <div className='Skills__middle--bts'>
                <div className='Skills__middle--text'>
                    <p className='title'>pourquoi le bts :</p>
                    <p>Me préparer au diplôme du BTS esthétique était pour moi une évidence étant donné que j’ai toujours voulu avoir mon propre centre de bien être. J’ai également été soutenu dans ce choix par mon entourage et mes professeurs. Avec son option Management, je suis prête à gérer efficacement une entreprise, de la gestion des ressources humaines à la planification stratégique.</p>
                </div>
            </div>
            <div className='Skills__middle--containImage onDesktop'>
                <img className='Skills__middle--image' alt='Wall_image' src={Background2} />
            </div>
        </div>
        <div className='onTouch doubleImage'>
            <img className='doubleImage--image im1' alt='Wall_image' src={Background2} />
            <img className='doubleImage--image im2' alt='Spa_image' src={Background3} />
        </div>
        <div className='Skills__bottom'>
            <div className='Skills__bottom--containImage onDesktop'>
                <img className='Skills__bottom--image' alt='Spa_image' src={Background3} />
            </div>
            <div className='Skills__bottom--atout'>
                <div className='Skills__bottom--text'>
                    <p className='title'>mes atouts</p>
                    <p>Ayant eu un parcours divers et variés avec un programme scolaire complet je suis une personne motivée et passionnée par  mon domaine d'activité.  J'ai eu la chance de mettre en place plusieurs actions au sein de mes écoles et de mes entreprises. Grâce à mon éducation je suis une personne organisée et j'aime aller jusqu'au bout de mes projets.  J'ai également beaucoup d'ambitions pour l'avenir avec des projets pleins la tête. </p>
                </div>
            </div>
        </div>
    </PageLayout>);
}

export default Skills;