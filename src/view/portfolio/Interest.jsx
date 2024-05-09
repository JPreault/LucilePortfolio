import PageLayout from "../../components/layout/PageLayout"
import equitation from '../../images/interest/equitation.png';
import equitation1 from '../../images/interest/equitation1.png';
import equitation2 from '../../images/interest/equitation2.png';
import equitation3 from '../../images/interest/equitation3.mp4';
import equitation4 from '../../images/interest/equitation4.png';
import musculation from '../../images/interest/musculation.png';
import musculation1 from '../../images/interest/musculation1.png';
import musculation2 from '../../images/interest/musculation2.png';
import ski from '../../images/interest/ski.mp4';
import ski1 from '../../images/interest/ski1.png';
import ski2 from '../../images/interest/ski2.png';

const Interest = () => {

    return (<PageLayout className='Interest'>
        <div className="Interest__equitation">
            <div className="Interest__equitation--containMedia">
                <p className="title">équitation</p>
                <div className="leftPart">
                    <div className="top">
                        <video controls>
                            <source src={equitation3} type="video/mp4" />
                        </video>
                        <img src={equitation2} />
                    </div>
                    <div className="bottom">
                        <img src={equitation4} />
                        <img src={equitation1} />
                    </div>
                </div>
                <img src={equitation} />
            </div>
        </div>
        <div className="Interest__ski">
            <p className="title">ski</p>
            <div className="Interest__ski--containMedia">
                <img src={ski2} />
                <img src={ski1} />
                <video controls>
                    <source src={ski} type="video/mp4" />
                </video>
            </div>
        </div>
        <div className="Interest__musculation">
            <p className="title">musculation</p>
            <div className="Interest__musculation--containMedia">
                <img src={musculation1} />
                <img src={musculation} />
                <img src={musculation2} />
            </div>
        </div>
    </PageLayout>)
}

export default Interest;